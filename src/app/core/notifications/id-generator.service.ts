import { Injectable } from '@angular/core';

/**
 * TODO Should this class be an observable?
 */
@Injectable()
export class IdGeneratorService {
	private id: number = 0;
	
	get(): number {
		return this.id;
	}
	
	next(): number {
		this.id++;
		
		return this.get();
	}
}
