import { Subscription, Observable, BehaviorSubject } from 'rxjs';

import { IdType, Entity, Cache, CachableObservable } from './';

/**
 * Base service class
 */
export abstract class BaseService<T extends Entity> {
    private entitiesChanges = new BehaviorSubject<T[]>(this.getMockData());
    //protected cache = new CachableObservable<T[]>();

    /**
     * Updates existing entity
     */
    updateEntity(entity: T): Observable<boolean> {
        let result = false;
        let data = this.getMockData();

        let index = data.findIndex(mock => mock.id == entity.id);

        if (index != null) {
            data[index] = entity;

            // Emit updated entities
            // TODO when emitting entities changes the templates act strangely
            this.entitiesChanges.next(data);

            result = true;
        }

        return Observable.of(result);
    }

    /**
     * Gets all entities async
     */
    getAll(): Observable<T[]> {
        /**
         * Instead of using CachableObservable, can we use .share() / .publish().refCount() ?
            .map(...)
            .publishLast() / publishReplay()
            .refCount()
         */
        return this.getMockDataAsObservable();
    }

    /**
     * Gets all entities sync
     */
    getAllSync(): T[] {
        return this.getMockData();
    }

    /**
     * Gets entity on id async
     *
     * @param id
     */
    getOnId(id: IdType): Observable<T> {
       return this.getAll().map(result => result.find(mock => mock.id === id));
    }

    /**
     * Gets entity on id sync
     *
     * @param id
     */
    getOnIdSync(id: IdType): T {
        return this.getMockData().find(mock => mock.id === id);
    }

    /**
     * Cleans cache 
     */
    cleanCache() {
        //this.cache.cleanCache();
    }

    protected getMockDataAsObservable(): Observable<T[]> {
        // Generate a random delay to imitate real http requests and async
        let random = Math.random();

        let delay = random * 1000;

        if (delay > 500) {
            delay = delay / 2;
        }

        return this.entitiesChanges.asObservable().delay(delay);
    }

     protected abstract getMockData(): T[];
}