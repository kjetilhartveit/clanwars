import { Player } from '../players/';

export abstract class MatchSide {
	abstract name: string;
	score: number;
}

export class SinglesMatchSide extends MatchSide {
	player: Player;

	get name(): string {
		return this.player.nickname;
	}
}

export class DoublesMatchSide extends MatchSide {
	player1: Player;
	player2: Player;

	get name(): string {
		return this.player1.nickname + " / " + this.player2.nickname;
	}
}