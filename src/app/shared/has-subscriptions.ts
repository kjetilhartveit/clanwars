import { OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs';

// Consider exporting Subscription here
// export { Subscription } from 'rxjs';

/**
 * Common interface used by classes which uses subscriptions
 */
export interface HasSubscriptions extends OnDestroy {
	subs: Subscription[];
}

/**
 * Should be implemented by components and directives if they use subscriptions
 */
export interface HasSubscriptionsNg extends HasSubscriptions, OnInit {
}
