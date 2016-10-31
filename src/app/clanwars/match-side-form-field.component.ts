import { Component, HostBinding, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { globals } from '../core/globals';
import { MatchSide } from './match-side';
import { SinglesMatchSide } from './singles-match-side';
import { DoublesMatchSide } from './doubles-match-side';
import { Player } from '../players/player';
import { PlayersService } from '../players/players.service';

@Component({
  selector: globals.directiveSelector + 'match-side-form-field',
  templateUrl: './match-side-form-field.component.html',
  styleUrls: ['./match-side-form-field.component.scss']
})
export class MatchSideFormFieldComponent implements OnInit {
	private singlesMatchSide: SinglesMatchSide;
	private doublesMatchSide: DoublesMatchSide;
	private players: Player[];
	
	@Input()
	sideNum: number;
	
	@Input()
	matchSide: MatchSide;
	
	@Output()
	changeMatchSide = new EventEmitter<MatchSide>();

	@HostBinding('attr.side')
	attrSide = this.sideNum;
	
  constructor(private playersService: PlayersService) {}

  ngOnInit() {
		this.players = this.playersService.getPlayers();
		
		if (this.matchSide instanceof SinglesMatchSide) {
			this.singlesMatchSide = <SinglesMatchSide>this.matchSide;
		} else if (this.matchSide instanceof DoublesMatchSide) {
			this.doublesMatchSide = <DoublesMatchSide>this.matchSide;
		}
  }
	
	onChangeScore(score: number) {
		this.matchSide.score = score;
		
		this.changeMatchSide.next(this.matchSide);
	}

	onChangeSinglesPlayer(player: Player) {
		this.singlesMatchSide.player = player;
		this.matchSide = this.singlesMatchSide;
		
		this.changeMatchSide.next(this.matchSide);
	}
	
	onChangeDoublesPlayer(playerNum: number, player: Player) {
		if (playerNum === 1) {
			this.doublesMatchSide.player1 = player;
		} else {
			this.doublesMatchSide.player2 = player;
		}
		
		this.matchSide = this.doublesMatchSide;
		
		this.changeMatchSide.next(this.matchSide);
	}
}
