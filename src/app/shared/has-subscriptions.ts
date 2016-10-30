import { OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs';

/**
 * Common interface used by classes which uses subscriptions
 */
export interface HasSubscriptions extends OnDestroy {
	subs: Subscription[];
}

/**
 * Should be implemented by components and directives if they use subscriptions
 */
export interface HasSubscriptionsNgLifecycles extends HasSubscriptions, OnInit {
}
