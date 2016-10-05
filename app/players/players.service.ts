import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Service } from '../shared';
import { Player, PLAYERS } from './';
import { Clan } from '../clans';
 
@Injectable()
export class PlayersService {
	
	/**
	 * TODO Make async, Promise<Player[]>
	 */
	getPlayers(): Player[] {
		return PLAYERS;
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