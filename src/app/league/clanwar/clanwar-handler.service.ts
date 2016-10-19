import { Injectable } from '@angular/core';

import { MatchSide } from './match-side';
import { ClanResult } from './clan-result';
import { ClanwarMatchMapping } from './clanwar-match-mapping';
import { ClanwarResult } from './clanwar-result';

@Injectable()
export class ClanwarHandlerService {
	mapAndCalculate(map: ClanwarMatchMapping): ClanwarResult {
		let clan1result = {
			clan: map.clan1,
			score: 0
		};
		
		let clan2result = {
			clan: map.clan2,
			score: 0
		};
		
		this.updateClanResults(this.calculateMatchResult(map.match1), clan1result, clan2result);
		this.updateClanResults(this.calculateMatchResult(map.match2), clan1result, clan2result);
		this.updateClanResults(this.calculateMatchResult(map.match3), clan1result, clan2result);
		this.updateClanResults(this.calculateMatchResult(map.match4), clan1result, clan2result);
		this.updateClanResults(this.calculateMatchResult(map.match5), clan1result, clan2result);
		
		let clanwarResult = new ClanwarResult();
		
		clanwarResult.clan1 = clan1result;
		clanwarResult.clan2 = clan2result;
		clanwarResult.map = map;
		
		return clanwarResult;
	}
	
	private updateClanResults(scores: number, clan1result: ClanResult, clan2result: ClanResult) {
		if (scores === 1) {
			clan1result.score++;
		} else if (scores === 2) {
			clan2result.score++;
		}
	}
	
	private calculateMatchResult(match: { clan1: MatchSide, clan2: MatchSide }): number {
		return this.calculateMatchSidesResult(match.clan1, match.clan2);
	}
	
	/**
	 * @return number Returns 1 for side1, 2 for side2 or 0 for tie
	 */
	private calculateMatchSidesResult(matchSide1: MatchSide, matchSide2: MatchSide): number {
		if (matchSide1.score > matchSide2.score) {
			return 1;
		} else if (matchSide1.score < matchSide2.score) {
			return 2;
		}
		
		return 0;
	}
}