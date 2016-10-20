import { MatchSide } from './match-side';
import { Player } from '../../players/player';

export class DoublesMatchSide extends MatchSide {
	player1: Player;
	player2: Player;
	
	get name(): string {
		return this.player1.nickname + " / " + this.player2.nickname;
	}
}