import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class CachableObservable<T> {
    private data: T;
    private observable: Observable<T>;
    
    getAndCache(callback: Observable<T>): Observable<T> {
        if (this.data) {
            // if `data` is available just return it as `Observable`
            return Observable.of(this.data);
        } else if (this.observable) {
            // if `this.observable` is set then the request is in progress
            // return the `Observable` for the ongoing request
            return this.observable;
        } else {
            this.observable = callback
                .map(response => {
                    // when the cached data is available we don't need the `Observable` reference anymore
                    this.observable = null;

                    if (response) {
                        this.data = response;
                        return this.data;
                    }
                })
                .share();

            return this.observable;
        }
    }

    cleanCache() {
        this.data = null;
    }
}
