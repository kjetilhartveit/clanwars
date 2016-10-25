import { Match, MatchType } from './match';
import { DoublesMatchSide } from './doubles-match-side';

export class DoublesMatch extends Match {
	side1: DoublesMatchSide;
	side2: DoublesMatchSide;
	
	get type() {
		return MatchType.Doubles;
	}
}