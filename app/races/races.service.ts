import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Service } from '../shared';
import { Race, RACES } from './';
 
@Injectable()
/**
 * Races service.
 * 
 * A lot of hardcoding here, should we refactor or not?
 */
export class RacesService {
	/**
	 * TODO Make async, Promise<Race[]>
	 */
	getRaces(): Race[] {
		return RACES;
	}
	
	getOnId(id: string): Race {
		return this.getRaces().find(p => p.id === id);
	}
}