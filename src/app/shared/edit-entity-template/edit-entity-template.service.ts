import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class EditEntityTemplateService<T> {
    readonly entityChanges: Observable<T>;

    private changeEntity = new BehaviorSubject<T>(null);

    constructor() {
        // Init observable. Skip falsy entities
        this.entityChanges = this.changeEntity.asObservable().skipWhile(entity => !entity);
    }

    /**
     * Select entity
     */
    selectEntity(entity: T) {
        this.changeEntity.next(entity);
    }
}
