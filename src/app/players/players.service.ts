import { Injectable }    from '@angular/core';

import { Player } from './player';
import { PLAYERS } from './mock-players';
import { Clan } from '../clans/clan';
import { Cache } from '../shared/cache';
 
@Injectable()
export class PlayersService {
	
	private _cache = new Cache<Player[]>();
	
	getPlayers(): Player[] {
		if (!this._cache.hasCache()) {
			this._cache.add(PLAYERS);
		}
		
		return this._cache.get();
	}
	
	getPlayerOnId(id: number): Player {
		return this.getPlayers().find(p => p.id === id);
	}
	
	getPlayersInClan(clan: Clan): Player[] {
		return this.getPlayersInClanOnId(clan.id);
	}
	
	getPlayersInClanOnId(clanId: number): Player[] {
		return this.getPlayers().filter(p => p.clan != null && p.clan.id == clanId);
	}
}