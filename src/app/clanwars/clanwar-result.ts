import { ClanResult, Clanwar } from './';

export class ClanwarResult {
	clan1result: ClanResult;
	clan2result: ClanResult;

	clanwar: Clanwar;
	
	getWinner(): ClanResult {
		if (this.clan1result.score > this.clan2result.score) {
			return this.clan1result;
		} else if (this.clan1result.score < this.clan2result.score) {
			return this.clan2result;
		}
		
		return null;
	}
}