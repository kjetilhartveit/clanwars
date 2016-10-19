import { Clan } from '../../clans/clan';
import { MatchSide } from './match-side';

export interface ClanwarMatchMapping {
	clan1: Clan,
	clan2: Clan,
	
	match1: {
		clan1: MatchSide,
		clan2: MatchSide
	},
	match2: {
		clan1: MatchSide,
		clan2: MatchSide
	},
	match3: {
		clan1: MatchSide,
		clan2: MatchSide
	},
	match4: {
		clan1: MatchSide,
		clan2: MatchSide
	},
	match5: {
		clan1: MatchSide,
		clan2: MatchSide
	}
}