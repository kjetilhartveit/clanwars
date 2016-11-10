import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { globals, Subscription, SubscriptionsManager, HasSubscriptionsNg } from '../core/';
import { Player } from '../players/';
import { PlayersService } from '../players/players.service';

@Component({
	selector: globals.directiveSelector + 'match-side-controls',
	templateUrl: './match-side-controls.component.html',
	styleUrls: ['./match-side-controls.component.scss']
})
export class MatchSideControlsComponent implements HasSubscriptionsNg, OnInit, OnDestroy {
	@Input() matchSideGroup: FormGroup;
	@Input() sideNum: number;

    players: Player[];
    subs = new SubscriptionsManager();

	constructor(private playersService: PlayersService) {
	}

    ngOnInit() {
        this.subs.add(
            this.playersService.getAll().subscribe(players => {
                this.players = players;
            })
        );
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
