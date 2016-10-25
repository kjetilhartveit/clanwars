import { Component, Input, OnInit } from '@angular/core';

import { globals } from '../core/globals';
import { MatchSide } from './match-side';
import { SinglesMatchSide } from './singles-match-side';
import { DoublesMatchSide } from './doubles-match-side';
import { Match } from './match';
import { Player } from '../players/player';
import { PlayersService } from '../players/players.service';

@Component({
  selector: globals.directiveSelector + 'match-side-as-form-fields',
  templateUrl: './match-side-as-form-fields.component.html',
  styleUrls: ['./match-side-as-form-fields.component.scss']
})
export class MatchSideAsFormFieldsComponent implements OnInit {

	@Input()
	match: Match;
	
	@Input()
	matchSide: MatchSide;
	
	@Input()
	sideNum: number;
	
	private singlesMatchSide: SinglesMatchSide;
	private doublesMatchSide: DoublesMatchSide;
	
	private players: Player[];

  constructor(private playersService: PlayersService) {}

  ngOnInit() {
		this.players = this.playersService.getPlayers();
		
		if (this.matchSide instanceof SinglesMatchSide) {
			this.singlesMatchSide = <SinglesMatchSide>this.matchSide;
		} else if (this.matchSide instanceof DoublesMatchSide) {
			this.doublesMatchSide = <DoublesMatchSide>this.matchSide;
		}
  }

}
