import { Injectable } from '@angular/core';

import { Match, MatchSide, ClanResult, ClanwarResult, Clanwar } from './';

@Injectable()
export class ClanwarsHandlerService {
    /**
     * Calculate results from clanwar
     */
	calculateResults(clanwar: Clanwar): ClanwarResult {
		let clan1result = {
			clan: clanwar.clan1,
			score: 0
		};
		
		let clan2result = {
			clan: clanwar.clan2,
			score: 0
		};

        // Calculate clan scores
		for (let match of clanwar.matches) {
			this.updateClanScores(this.calculateMatchScore(match), clan1result, clan2result);
		}
		
		let clanwarResult = new ClanwarResult();
		
		clanwarResult.clan1result = clan1result;
		clanwarResult.clan2result = clan2result;
		clanwarResult.clanwar = clanwar;
		
		return clanwarResult;
	}

    /**
     * Updates clan scores
     */
	private updateClanScores(scores: number, clan1result: ClanResult, clan2result: ClanResult) {
		if (scores === 1) {
			clan1result.score++;
		} else if (scores === 2) {
			clan2result.score++;
		}
	}

    /**
     * Calculate match score 
     */
	public calculateMatchScore(match: Match): number {
		return this.calculateMatchSidesScores(match.side1, match.side2);
	}
	
	/**
	 * @return number Returns 1 for side1, 2 for side2 or 0 for tie
	 */
	public calculateMatchSidesScores(matchSide1: MatchSide, matchSide2: MatchSide): number {
		if (matchSide1.score > matchSide2.score) {
			return 1;
		} else if (matchSide1.score < matchSide2.score) {
			return 2;
		}
		
		return 0;
	}
}