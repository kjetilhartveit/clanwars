import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'edit-entity-template',
    templateUrl: './edit-entity-template.component.html',
    styleUrls: ['./edit-entity-template.component.scss']
})
export class EditEntityTemplateComponent implements OnInit {
    @Input() title: string;

    constructor() { }

    ngOnInit() {
    }

}
