import { Injectable, Inject }    from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Service } from '../shared';
import { Clan, CLANS } from './';
//import { Player, PlayersService } from '../players';
 
@Injectable()
export class ClansService {
	
	// Seem to run into some circular dependencies here
//	constructor(public playersService: PlayersService) {}
	
	/**
	 * TODO Make async, Promise<Clan[]>
	 */
	getClans(): Clan[] {
		return CLANS;
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