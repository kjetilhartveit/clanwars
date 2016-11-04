import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class EditEntityTemplateService<T> {
	selectItem = new BehaviorSubject<T>(null);

    constructor() { }
}
