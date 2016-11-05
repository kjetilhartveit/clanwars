import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

import { globals } from '../core/globals';
import { HasSubscriptionsNg } from '../shared/has-subscriptions';
import { Player } from '../players/player';
import { PlayersService } from '../players/players.service';

@Component({
	selector: globals.directiveSelector + 'match-side-controls',
	templateUrl: './match-side-controls.component.html',
	styleUrls: ['./match-side-controls.component.scss']
})
export class MatchSideControlsComponent implements HasSubscriptionsNg, OnInit {
	@Input() matchSideGroup: FormGroup;
	@Input() sideNum: number;

    players: Player[];
    subs: Subscription[] = [];

	constructor(private playersService: PlayersService) {
	}

    ngOnInit() {
        this.subs.push(
            this.playersService.getAll().subscribe(players => {
                this.players = players;
            })
        );
    }

    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
}
