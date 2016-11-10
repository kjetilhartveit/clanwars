import { MatchSide, SinglesMatchSide, DoublesMatchSide } from './';

export abstract class Match {
	id: number;
	distance: MatchDistance;
	abstract side1: MatchSide;
	abstract side2: MatchSide;
	abstract type: MatchType;
}

export class SinglesMatch extends Match {
	side1: SinglesMatchSide;
	side2: SinglesMatchSide;

	get type() {
		return MatchType.Singles;
	}
}

export class DoublesMatch extends Match {
	side1: DoublesMatchSide;
	side2: DoublesMatchSide;

	get type() {
		return MatchType.Doubles;
	}
}

export enum MatchType {
	Singles = 1,
	Doubles = 2
}

export enum MatchDistance {
	BestOf5  = 1,
	BestOf7  = 2,
	BestOf9	 = 3,
	BestOf11 = 4
}