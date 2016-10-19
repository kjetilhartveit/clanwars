import { ClanResult } from './clan-result';
import { ClanwarMatchMapping } from './clanwar-match-mapping';

export class ClanwarResult {
	clan1: ClanResult;
	clan2: ClanResult;

	map: ClanwarMatchMapping;
	
	getWinner(): ClanResult {
		if (this.clan1.score > this.clan2.score) {
			return this.clan1;
		} else if (this.clan1.score < this.clan2.score) {
			return this.clan2;
		}
		
		return null;
	}
}