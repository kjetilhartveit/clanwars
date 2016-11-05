import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Player } from './player';
import { PLAYERS } from './mock-players';
import { Clan } from '../clans/clan';
import { Cache } from '../shared/cache';
import { BaseService } from '../shared/base.service';
 
@Injectable()
export class PlayersService extends BaseService<Player> {
    getMockData() {
        return PLAYERS;
    }
	
    getPlayersInClan(clan: Clan): Observable<Player[]> {
        return this.getPlayersInClanOnId(clan.id);
    }

    getPlayersInClanOnId(clanId: number): Observable<Player[]> {
        return this.getAll().map(players => players.filter(player => player.clan && player.clan.id == clanId));
    }
}