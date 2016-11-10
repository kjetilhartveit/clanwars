
export interface NotificationsConfig {
	showClose?: boolean;
	limit?: number;
	timeout?: number;
	position?: NotificationsPosition;
}

export enum NotificationsPosition {
	BottomRight  = 1,
	BottomLeft   = 2,
	TopRight     = 3,
	TopLeft      = 4,
	TopCenter    = 5,
	BottomCenter = 6,
	CenterCenter = 7
}