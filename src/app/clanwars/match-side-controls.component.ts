import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { globals } from '../core/globals';
import { Player } from '../players/player';
import { PlayersService } from '../players/players.service';

@Component({
	selector: globals.directiveSelector + 'match-side-controls',
	templateUrl: './match-side-controls.component.html',
	styleUrls: ['./match-side-controls.component.scss']
})
export class MatchSideControlsComponent implements OnInit {
	@Input() matchSideGroup: FormGroup;
	@Input() sideNum: number;

	players: Player[];

	constructor(private playersService: PlayersService) {
	}

	ngOnInit() {
		this.players = this.playersService.getPlayers();
	}
}
