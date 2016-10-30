import { Component, ViewEncapsulation, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'edit-entity-template-column',
  templateUrl: './edit-entity-template-column.component.html',
  styleUrls: ['./edit-entity-template-column.component.scss'],
	encapsulation: ViewEncapsulation.None 
})
export class EditEntityTemplateColumnComponent implements OnInit {
	@Input()
	type: string;
	
	@HostBinding('class')
	typeClass: string;

  constructor() { }

  ngOnInit() {
		this.typeClass = 'type-' + this.type.toLowerCase();
	}

}
