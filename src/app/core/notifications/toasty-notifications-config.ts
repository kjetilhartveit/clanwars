import { ToastyConfig } from 'ng2-toasty';

import { NotificationsConfig, NotificationsPosition } from './';

export class ToastyNotificationsConfig implements NotificationsConfig {
	showClose? = true;
	limit? = 5;
	timeout? = 5000;
	position? = NotificationsPosition.BottomRight;
	
	private theme = 'design';

    /**
     * Builds a native toasty config from TS config
     */
	toToastyConfig(): ToastyConfig {
		return {
			limit: this.limit,
			showClose: this.showClose,
			position: this.positionToString(this.position),
			timeout: this.timeout,
			theme: this.theme
		};
	}

    /**
     * Converts enum to native position value
     */
	private positionToString(position: NotificationsPosition): string {
		let str: string;
			
		switch (position) {
			case NotificationsPosition.BottomLeft: str = 'bottom-left'; break;
			case NotificationsPosition.TopRight: str = 'top-right'; break;
			case NotificationsPosition.TopLeft: str = 'top-left'; break;
			case NotificationsPosition.TopCenter: str = 'top-center'; break;
			case NotificationsPosition.BottomCenter: str = 'bottom-center'; break;
			case NotificationsPosition.CenterCenter: str = 'center-center'; break;
			default: str = 'bottom-right'; break;
		}
		
		return str;
	}
}
