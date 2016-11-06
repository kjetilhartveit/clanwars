import { OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs';
export { Subscription } from 'rxjs';

// Clean-up closed subscriptions at a regular interval or perhaps when the number of subs
// passes a treshold?
export class SubscriptionsManager {
    subs: Subscription[] = [];

    add(...subs: Subscription[]): number {
        return this.subs.push(...subs);
    }

    unsubscribe() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.subs = [];
    }
}

/**
 * Common interface used by classes which uses subscriptions
 */
export interface HasSubscriptions {
    subs: SubscriptionsManager;
}

/**
 * Should be implemented by components and directives if they use subscriptions
 */
export interface HasSubscriptionsNg extends HasSubscriptions, OnDestroy {
}
