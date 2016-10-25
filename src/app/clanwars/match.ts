import { MatchSide } from './match-side';

export abstract class Match {
	distance: MatchDistance;
	abstract side1: MatchSide;
	abstract side2: MatchSide;
	abstract type: MatchType;
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