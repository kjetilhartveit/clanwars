import { MatchSide } from './match-side';
import { Player } from '../../players/player';

export class SinglesMatchSide extends MatchSide {
	player: Player;
	
	get name(): string {
		return this.player.nickname;
	}
}