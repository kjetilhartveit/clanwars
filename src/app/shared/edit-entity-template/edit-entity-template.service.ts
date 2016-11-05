import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class EditEntityTemplateService<T> {
    entityChanges = new BehaviorSubject<T>(null);

    constructor() {
    }
}
