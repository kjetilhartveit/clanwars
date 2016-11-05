import { Injectable }    from '@angular/core';

import { Clanwar } from './clanwar';
import { CLANWARS } from './mock-clanwars';
import { Cache } from '../shared/cache';
import { BaseService } from '../shared/base.service';
 
@Injectable()
export class ClanwarsService extends BaseService<Clanwar> {
    getMockData() {
        return CLANWARS;
    }

	private _cache = new Cache<Clanwar[]>();
	
	getClanwars(): Clanwar[] {
		if (!this._cache.hasCache()) {
			this._cache.add(CLANWARS);
		}
		
		return this._cache.get();
	}
	
	getClanwarOnId(id: number): Clanwar {
		return this.getClanwars().find(p => p.id === id);
	}
}