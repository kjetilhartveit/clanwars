import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Subscription, BehaviorSubject } from 'rxjs';

@Injectable()
export class EditEntityTemplateService<T> implements OnInit, OnDestroy {
	selectedItem: T;
	selectItem = new BehaviorSubject<T>(null);

	subs: Subscription[] = [];

  constructor() { }
	
	ngOnInit() {
		this.subs.push(
			this.selectItem.subscribe((item) => {
				this.selectedItem = item;
			})
		);
	}

	ngOnDestroy() {
		this.subs.forEach((sub) => {
			sub.unsubscribe();
		})
	}
}
