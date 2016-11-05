import { Subscription, Observable } from 'rxjs';

import { Cache } from './cache';
import { CachableObservable } from './cachable-observable';

export abstract class BaseService<T> {
    protected cache = new CachableObservable<T[]>();
    
    getAll(): Observable<T[]> {
        return this.cache.getAndCache(this.getMockDataAsObservable());
    }

    getOnId(id: number | string): Observable<T> {
       return this.getAll().map(result => result.find(mock => mock['id'] === id));
    }

    cleanCache() {
        this.cache.cleanCache();
    }

    getAllSync(): T[] {
        return this.getMockData();
    }

    getOnIdSync(id: number | string): T {
        return this.getMockData().find(mock => mock['id'] === id);
    }

    protected getMockDataAsObservable(): Observable<T[]> {
        // Generate a random delay to imitate real http requests and async
        let random = new Date().getMilliseconds();

        let delay = random > 500 ? random/2 : random;
        
        return Observable.of(this.getMockData())
                         .delay(delay);
    }

     protected abstract getMockData(): T[];
}