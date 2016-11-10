import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseService } from '../core/';
import { Player } from './';
import { Clan } from '../clans/';
import { PLAYERS } from './mock-players';
 
@Injectable()
export class PlayersService extends BaseService<Player> {
    getMockData() {
        return PLAYERS;
    }

    /**
     * Get players in clan
     */
    getPlayersInClan(clan: Clan): Observable<Player[]> {
        return this.getPlayersInClanOnId(clan.id);
    }

    /**
     * Get players in clan on ID
     */
    getPlayersInClanOnId(clanId: number): Observable<Player[]> {
        return this.getAll().map(players => players.filter(player => player.clan && player.clan.id == clanId));
    }
}