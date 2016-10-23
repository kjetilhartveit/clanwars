import { Component, Inject, Output, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription, ReplaySubject } from 'rxjs';

import { globals } from '../globals';
import { NotificationsFactory } from './notifications.factory';
import { NotificationsFactoryToken } from './notifications.factory.token';
import { NotificationsService } from './notifications.service';
import { NotificationsServiceToken } from './notifications.service.token';
import { ToastyNotificationsFactory } from './toasty-notifications.factory';
import { ToastyNotificationsService } from './toasty-notifications.service';

@Component({
  selector: globals.directiveSelector + 'notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements AfterViewInit, OnDestroy {
	private toastsObserver: MutationObserver;
	private subs: Subscription[] = [];
	
	@Output()
	toastAddedToDom = new ReplaySubject<Element>();
	
	constructor(private elementRef: ElementRef,
							@Inject(NotificationsFactoryToken) private notifactionsFactory: NotificationsFactory,
							@Inject(NotificationsServiceToken) private notificationsService: NotificationsService) {
		let toastyNotificationsFactory = <ToastyNotificationsFactory> notifactionsFactory;
		let toastyNotificationsService = <ToastyNotificationsService> notificationsService;
		
		this.subs.push(
			this.toastAddedToDom.subscribe((element) => toastyNotificationsFactory.onToastAddedToDom(element)),
			this.toastAddedToDom.subscribe((element) => toastyNotificationsService.onToastAddedToDom(element))
		);
	}
	
	ngAfterViewInit() {
		this.toastsObserver = new MutationObserver((mutations: MutationRecord[], observer: MutationObserver) => {
			
			let toasts = mutations.map(p => {
				let len = p.addedNodes.length;
				
				for (let i = 0; i < len; i++) {
					let node = p.addedNodes.item(i);
					
					if (node.nodeName.toLowerCase() === 'ng2-toast') {
						return <Element> node;
					}
				}
			}).filter(p => p);
			
			if (toasts && toasts.length) {
				for (let toast of toasts) {
					this.toastAddedToDom.next(toast);
				}
				
//				setTimeout(() => {
//					for (let toast of toasts) {
//						toast.classList.add('showing');
//					}
//				}, 100);	
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
	
	ngOnDestroy() {
		this.subs.forEach(p => p.unsubscribe());
		this.toastsObserver.disconnect();
	}
}
