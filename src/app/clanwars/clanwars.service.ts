import { Injectable }    from '@angular/core';

import { Clanwar } from './clanwar';
import { CLANWARS } from './mock-clanwars';
import { Cache } from '../shared/cache';
 
@Injectable()
/**
 * Races service.
 * 
 * A lot of hardcoding here, should we refactor or not?
 */
export class ClanwarsService {
	
	private _cache = new Cache<Clanwar[]>();
	
	getClanwars(): Clanwar[] {
		if (!this._cache.hasCache()) {
			this._cache.add(CLANWARS);
		}
		
		return this._cache.get();
	}
	
	getOnId(id: number): Clanwar {
		return this.getClanwars().find(p => p.id === id);
	}
}