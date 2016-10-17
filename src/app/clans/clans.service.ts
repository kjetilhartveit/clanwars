import { Injectable }    from '@angular/core';

import { Clan, CLANS } from './';
import { Cache } from '../shared';
//import { Player, PlayersService } from '../players';
 
@Injectable()
export class ClansService {
	
	private _cache = new Cache<Clan[]>();
	
	// Seem to run into some circular dependencies here
//	constructor(public playersService: PlayersService) {}
	
	/**
	 * TODO Make async, Promise<Clan[]>
	 */
	getClans(): Clan[] {
		if (!this._cache.hasCache()) {
			this._cache.add(CLANS);
		}
		
		return this._cache.get();
	}
	
	getClanOnId(id: number) {
		return this.getClans().find(c => c.id === id);
	}
	
//	getClanPlayers(clan: Clan): Player[] {
//		return this.playersService.getPlayersInClan(clan);
//	}
//	
//	getClanPlayersOnId(clanId: number): Player[] {
//		return this.playersService.getPlayersInClanOnId(clanId);
//	}
}