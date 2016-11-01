import { Component, HostBinding, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
	@Input() matchSide: MatchSide;
	@Input() sideNum: number;
	@Input() matchFormGroup: FormGroup;
	@Output() changeMatchSide = new EventEmitter<MatchSide>();

	@HostBinding('attr.side') attrSide = this.sideNum;

	private singlesMatchSide: SinglesMatchSide;
	private doublesMatchSide: DoublesMatchSide;
	private players: Player[];
	private matchSideFormGroup: FormGroup;

  constructor(private playersService: PlayersService) {}

	ngOnInit() {
		this.players = this.playersService.getPlayers();

		this.buildForm();
	}
	
	buildForm() {
		let matchSideFormGroup = new FormGroup({
			score: new FormControl(this.matchSide.score)
		});

		if (this.matchSide instanceof SinglesMatchSide) {
			this.singlesMatchSide = <SinglesMatchSide>this.matchSide;

			matchSideFormGroup.addControl('player', new FormControl(this.singlesMatchSide.player));
		} else if (this.matchSide instanceof DoublesMatchSide) {
			this.doublesMatchSide = <DoublesMatchSide>this.matchSide;

			matchSideFormGroup.addControl('player1', new FormControl(this.doublesMatchSide.player1));
			matchSideFormGroup.addControl('player2', new FormControl(this.doublesMatchSide.player2));
		}

		this.matchSideFormGroup = matchSideFormGroup;
		this.matchFormGroup.addControl('side' + this.sideNum, matchSideFormGroup);
	}
	
	onChangeScore(score: number) {
		//this.matchSide.score = score;
		
		this.changeMatchSide.next(this.matchSide);
	}

	onChangeSinglesPlayer(player: Player) {
		//this.singlesMatchSide.player = player;
		//this.matchSide = this.singlesMatchSide;
		
		this.changeMatchSide.next(this.matchSide);
	}
	
	onChangeDoublesPlayer(playerNum: number, player: Player) {
		//if (playerNum === 1) {
		//	this.doublesMatchSide.player1 = player;
		//} else {
		//	this.doublesMatchSide.player2 = player;
		//}
		
		//this.matchSide = this.doublesMatchSide;
		
		this.changeMatchSide.next(this.matchSide);
	}
}
