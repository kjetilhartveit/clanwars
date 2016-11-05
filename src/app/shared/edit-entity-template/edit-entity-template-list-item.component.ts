import { Component, HostBinding, HostListener, Input, EventEmitter, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { HasSubscriptionsNg } from '../has-subscriptions'; 
import { EditEntityTemplateService } from './edit-entity-template.service';

@Component({
    selector: 'edit-entity-template-list-item',
    templateUrl: './edit-entity-template-list-item.component.html',
    styleUrls: ['./edit-entity-template-list-item.component.scss']
})
export class EditEntityTemplateListItemComponent implements HasSubscriptionsNg, OnInit {
    @Input() entity: Object;

    @HostBinding('class.active') activeClass: boolean;
    @HostListener('click') onClick() {
	    this.editEntityTemplateService.entityChanges.next(this.entity);
    }

    subs: Subscription[] = [];
	
    constructor(private editEntityTemplateService: EditEntityTemplateService<Object>) {
    }
	
    ngOnInit() {
        this.subs.push(
	        this.editEntityTemplateService.entityChanges.subscribe((entity) => {
		        this.activeClass = this.entity === entity;
            })
        )
    }

    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
}
