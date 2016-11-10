import { OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs';
export { Subscription } from 'rxjs';

/**
 * Class for managing Observable subscriptions
 */
export class SubscriptionsManager {
    private subs: Subscription[] = [];

    /**
     * Add subscription(s)
     */
    add(...subs: Subscription[]): number {
        return this.subs.push(...subs);
    }

    /**
     * Unsbscribe from all registered subscription
     */
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
