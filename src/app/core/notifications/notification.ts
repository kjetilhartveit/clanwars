
export interface Notification {
	id: number;
	title: string;
	message: string;
	notificationType: NotificationType; 
}

export enum NotificationType {
	Info		= 1,
	Success = 2,
	Wait		= 3,
	Error		= 4,
	Warning = 5
}
