import { Injectable } from '@angular/core';

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
