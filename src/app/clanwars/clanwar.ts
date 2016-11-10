import { Clan } from '../clans/';
import { Match, ClanwarFormat } from './';

export class Clanwar {
	id: number;
	clan1: Clan;
	clan2: Clan;
	format: ClanwarFormat;
	matches: Match[];
}
