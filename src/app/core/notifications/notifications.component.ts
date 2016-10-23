import { Component, Inject, Output, EventEmitter, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { globals } from '../globals';
import { NotificationsService, NotificationsServiceToken } from './notifications.service';
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
	toastAddedToDom = new EventEmitter<Element>();
	
	constructor(private elementRef: ElementRef,
							@Inject(NotificationsServiceToken) private notificationsService: NotificationsService) {
		let toastyNotificationsService = <ToastyNotificationsService> notificationsService;
		
		this.subs.push(this.toastAddedToDom.asObservable().subscribe(toastyNotificationsService.onToastAddedToDom));
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
					this.toastAddedToDom.emit(toast);
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
