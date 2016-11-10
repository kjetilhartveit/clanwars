import { Observable } from 'rxjs';

import { Cache } from './';

/**
 * Class used for caching observables, for example for HTTP requests.
 *
 * Usage:
 * let cache = new CachedObservable<Array<SomeEntity>>();
 *
 * cache.get(this.backend.getSomeEntities()).subscribe(entities => {
 *   // do something 
 * });
 *
 * Source/inspiration: http://stackoverflow.com/questions/34104277/caching-results-with-angular2-http-service
 */
export class CachableObservable<T> {
    disableCache: boolean = false; // disables caching

    private cache = new Cache<T>(); // observable cache
    private observable: Observable<any>; // contains on-going request/observable

	/**
	 * Cleans cache
	 */
    cleanCache() {
        this.cache.clean();
    }

	/**
	 * Gets and caches observable 
	 */
    get(observable: Observable<T>): Observable<T> {
        if (!this.disableCache && this.cache.hasCache()) {
            // We have cache, return it
            return Observable.of(this.cache.get());
        } else if (this.observable) {
            // An on-going observable exists, use it
            return this.observable;
        } else {
            // Observe and cache
            this.observable = observable
                .map(response => {
                    this.observable = null;

                    this.cache.set(response);

                    return response;
                })
                .share();

            return this.observable;
        }
    }
}