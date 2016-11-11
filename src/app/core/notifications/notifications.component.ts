import { Component, Inject, Output, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription, ReplaySubject } from 'rxjs';
import { ToastyComponent } from 'ng2-toasty';

import {
    globals, SubscriptionsManager, HasSubscriptionsNg,
    NotificationsServiceToken
} from '../../core/';
import { IdGeneratorService } from '../../shared/id-generator.service';
import { NotificationsService } from './notifications.service';
import { ToastyNotificationsService } from './toasty-notifications.service';

@Component({
    selector: globals.directiveSelector + 'notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.scss'],
    providers: [IdGeneratorService]
})
export class NotificationsComponent implements HasSubscriptionsNg, AfterViewInit, OnDestroy {
	@ViewChild(ToastyComponent) private toastyComponent: ToastyComponent;

    subs = new SubscriptionsManager();

    private toastAddedToDom = new ReplaySubject<Element>(); // replay subject so we make sure not to miss any items
	private toastsObserver: MutationObserver;

	constructor(private elementRef: ElementRef,
				@Inject(NotificationsServiceToken) private notificationsService: NotificationsService) {
	}
	
	ngOnInit() {		
		let toastyNotificationsService = <ToastyNotificationsService>this.notificationsService;
        
        this.subs.add(
            this.toastAddedToDom.subscribe(element => {
                toastyNotificationsService.attachElementToNotification(element);
            })
		);
	}
	
    ngAfterViewInit() {
        // Store the toasty component
		(<ToastyNotificationsService>this.notificationsService).toastsContainer = this.toastyComponent;
		
		this.initMutationObserver();
	}
	
	ngOnDestroy() {
		this.subs.unsubscribe();
		this.toastsObserver.disconnect();
	}

    /**
     * Initialize mutation observer and listen on DOM to detect new toasts
     */
	initMutationObserver() {
		this.toastsObserver = new MutationObserver((mutations: MutationRecord[], observer: MutationObserver) => {

            // Find new toast nodes 
			let toasts = mutations.map(p => {
				let len = p.addedNodes.length;
				
				for (let i = 0; i < len; i++) {
					let node = p.addedNodes.item(i);
					
					if (node.nodeName.toLowerCase() === 'ng2-toast') {
						return <Element>node;
					}
				}
			}).filter(p => p);

            // Emit toast in subject
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
