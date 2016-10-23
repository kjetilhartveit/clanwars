import { Component, Output, EventEmitter, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

import { globals } from '../globals';
import { ToastyNotificationsService } from './toasty-notifications.service';

@Component({
  selector: globals.directiveSelector + 'notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements AfterViewInit, OnDestroy {
	private observer: MutationObserver;
	
	@Output()
	toastAddedToDom = new EventEmitter<ElementRef>();
	
//	sub: any;
	
	constructor(private elementRef: ElementRef) {
					
	}
	
	ngAfterViewInit() {
		this.observer = new MutationObserver((mutations: MutationRecord[], observer: MutationObserver) => {
			
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
					this.toastAddedToDom.emit(new ElementRef(toast));
				}
				
				setTimeout(() => {
					for (let toast of toasts) {
						console.log(toast);
						toast.classList.add('showing');
					}
				}, 100);	
			}
			
		});

		// define what element should be observed by the observer
		// and what types of mutations trigger the callback
		this.observer.observe(this.elementRef.nativeElement, {
			childList: true,
			subtree: true,
			attributes: false
		});
	}
	
	ngOnDestroy() {
//		this.sub;
	}
}
