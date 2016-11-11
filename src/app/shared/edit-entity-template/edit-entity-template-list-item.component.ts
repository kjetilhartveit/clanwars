import { Component, HostBinding, HostListener, Input, EventEmitter, OnInit } from '@angular/core';

import { Subscription, SubscriptionsManager, HasSubscriptionsNg } from '../../core/';
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
        this.editEntityTemplateService.selectEntity(this.entity);
    }

    subs = new SubscriptionsManager();
	
    constructor(private editEntityTemplateService: EditEntityTemplateService<Object>) {
    }
	
    ngOnInit() {
        this.subs.add(
	        this.editEntityTemplateService.entityChanges.subscribe((entity) => {
		        this.activeClass = this.entity === entity;
            })
        )
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
