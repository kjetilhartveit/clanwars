import { Subscription, Observable } from 'rxjs';

import { IdType, Entity, Cache, CachableObservable, Utility } from '../';

/**
 * Base service class
 */
export abstract class BaseService<T extends Entity> {
    protected cache = new CachableObservable<T[]>();

    /**
     * Updates existing entity
     */
    updateEntity(entity: T): Observable<boolean> {
        let result = false;
        let data = this.getMockData();

        let index = data.findIndex(mock => mock.id == entity.id);

        if (index != null) {
            // Create copy in order to trigger change detection
            //let entityCopy = Utility.shallowCopy<T>(entity);

            // Copy data from new entity to existing entity
            Utility.extend<T>(true, data[index], entity);
            
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
        return this.cache.get(this.getMockDataAsObservable());
    }

   /**
    * Gets all entities sync
    */
    getAllSync(): T[] {
        return this.getMockData();
    }

    /**
        * Gets entity on id async
        */
    getOnId(id: IdType): Observable <T> {
        return this.getAll().map(result => result.find(mock => mock.id === id));
    }

    /**
        * Gets entity on id sync
        */
    getOnIdSync(id: IdType): T {
        return this.getMockData().find(mock => mock.id === id);
    }
    
    protected getMockDataAsObservable(): Observable<T[]> {
        // Generate a random delay to imitate real http requests and async
        let random = Math.random();

        let delay = random * 1000;

        if (delay > 500) {
            delay = delay / 2;
        }
        
        return Observable.of(this.getMockData())
                         .delay(delay);
    }

     protected abstract getMockData(): T[];
}