import { Clan } from '../clans/clan';
import { Match } from './match';
import { ClanwarFormat } from './clanwar-format';

export class Clanwar {
	id: number;
	clan1: Clan;
	clan2: Clan;
	format: ClanwarFormat;
	matches: Match[];
}
