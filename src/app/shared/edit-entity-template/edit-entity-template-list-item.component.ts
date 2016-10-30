import { Component, HostBinding, HostListener, Input, EventEmitter, OnInit } from '@angular/core';

import { EditEntityTemplateService } from './edit-entity-template.service';

@Component({
  selector: 'edit-entity-template-list-item',
  templateUrl: './edit-entity-template-list-item.component.html',
  styleUrls: ['./edit-entity-template-list-item.component.scss']
})
export class EditEntityTemplateListItemComponent implements OnInit {
	@Input()
	item: Object;
	
  @HostBinding('class.active') 
	activeClass: boolean; 
  
	@HostListener('click') 
	onClick() {
		this.editEntityTemplateService.selectItem.next(this.item);
  }
	
	constructor(private editEntityTemplateService: EditEntityTemplateService<Object>) {
	}
	
  ngOnInit() {
		this.editEntityTemplateService.selectItem.subscribe((item) => {
			this.activeClass = this.item === item;
		});
  }
}
