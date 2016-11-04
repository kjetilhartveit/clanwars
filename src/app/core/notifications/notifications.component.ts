import { Component, Inject, Output, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription, ReplaySubject } from 'rxjs';
import { ToastyComponent } from 'ng2-toasty';

import { globals } from '../globals';
import { HasSubscriptionsNgLifecycles } from '../../shared/has-subscriptions';
import { IdGeneratorService } from '../../shared/id-generator.service';
import { NotificationsService } from './notifications.service';
import { NotificationsServiceToken } from './notifications.service.token';
import { ToastyNotificationsService } from './toasty-notifications.service';

@Component({
    selector: globals.directiveSelector + 'notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.scss'],
    providers: [IdGeneratorService]
})
export class NotificationsComponent implements HasSubscriptionsNgLifecycles, AfterViewInit, OnDestroy {
	@Output() readonly toastAddedToDom = new ReplaySubject<Element>();
	
	@ViewChild(ToastyComponent) private toastyComponent: ToastyComponent;

    subs: Subscription[] = [];

	private toastsObserver: MutationObserver;

	constructor(private elementRef: ElementRef,
				@Inject(NotificationsServiceToken) private notificationsService: NotificationsService) {

	}
	
	ngOnInit() {		
		let toastyNotificationsService = <ToastyNotificationsService>this.notificationsService;
		
		this.subs.push(
			this.toastAddedToDom.subscribe((element) => toastyNotificationsService.onToastAddedToDom(element))
		);
	}
	
	ngAfterViewInit() {
		(<ToastyNotificationsService>this.notificationsService).toastsContainer = this.toastyComponent;
		
		this.initMutationObserver();
	}
	
	ngOnDestroy() {
		this.subs.forEach(p => p.unsubscribe());
		this.toastsObserver.disconnect();
	}
	
	initMutationObserver() {
		this.toastsObserver = new MutationObserver((mutations: MutationRecord[], observer: MutationObserver) => {
			
			let toasts = mutations.map(p => {
				let len = p.addedNodes.length;
				
				for (let i = 0; i < len; i++) {
					let node = p.addedNodes.item(i);
					
					if (node.nodeName.toLowerCase() === 'ng2-toast') {
						return <Element>node;
					}
				}
			}).filter(p => p);
			
			if (toasts && toasts.length) {
				for (let toast of toasts) {
					this.toastAddedToDom.next(toast);
				}
			}
			
		});

		// define what element should be observed by the observer
		// and what types of mutations trigger the callback
		this.toastsObserver.observe(this.elementRef.nativeElement, {
			childList: true,
			subtree: true,
			attributes: false
		});
	}
}
