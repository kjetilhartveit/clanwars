import { Match, MatchType } from './match';
import { SinglesMatchSide } from './singles-match-side';

export class SinglesMatch extends Match {
	side1: SinglesMatchSide;
	side2: SinglesMatchSide;
	
	get type() {
		return MatchType.Singles;
	}
}