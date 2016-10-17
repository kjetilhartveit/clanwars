import { Injectable }    from '@angular/core';

import { Race, RACES } from './';
import { Cache } from '../shared';
 
@Injectable()
/**
 * Races service.
 * 
 * A lot of hardcoding here, should we refactor or not?
 */
export class RacesService {
	
	private _cache = new Cache<Race[]>();
	
	/**
	 * TODO Make async, Promise<Race[]>
	 */
	getRaces(): Race[] {
		if (!this._cache.hasCache()) {
			this._cache.add(RACES);
		}
		
		return this._cache.get();
	}
	
	getOnId(id: string): Race {
		return this.getRaces().find(p => p.id === id);
	}
}