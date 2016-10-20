import { Injectable } from '@angular/core';

import { Match } from './match';
import { MatchSide } from './match-side';
import { ClanResult } from './clan-result';
import { Clanwar } from './clanwar';
import { ClanwarResult } from './clanwar-result';

@Injectable()
export class ClanwarHandlerService {
	calculateResults(clanwar: Clanwar): ClanwarResult {
		let clan1result = {
			clan: clanwar.clan1,
			score: 0
		};
		
		let clan2result = {
			clan: clanwar.clan2,
			score: 0
		};
		
		for (let match of clanwar.matches) {
			console.log(match);
			this.updateClanResults(this.calculateMatchResult(match), clan1result, clan2result);
		}
		
		let clanwarResult = new ClanwarResult();
		
		clanwarResult.clan1result = clan1result;
		clanwarResult.clan2result = clan2result;
		clanwarResult.clanwar = clanwar;
		
		return clanwarResult;
	}
	
	private updateClanResults(scores: number, clan1result: ClanResult, clan2result: ClanResult) {
		if (scores === 1) {
			clan1result.score++;
		} else if (scores === 2) {
			clan2result.score++;
		}
	}
	
	public calculateMatchResult(match: Match): number {
		return this.calculateMatchSidesResult(match.side1, match.side2);
	}
	
	/**
	 * @return number Returns 1 for side1, 2 for side2 or 0 for tie
	 */
	public calculateMatchSidesResult(matchSide1: MatchSide, matchSide2: MatchSide): number {
		if (matchSide1.score > matchSide2.score) {
			return 1;
		} else if (matchSide1.score < matchSide2.score) {
			return 2;
		}
		
		return 0;
	}
}