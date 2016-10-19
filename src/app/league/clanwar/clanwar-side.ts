import { Clan } from '../../clans/clan';
import { SinglesMatchSide } from './singles-match-side';
import { DoublesMatchSide } from './doubles-match-side';

export class ClanwarSide {
	clan: Clan;
	singlesMatchSide1: SinglesMatchSide;
	singlesMatchSide2: SinglesMatchSide;
	singlesMatchSide3: SinglesMatchSide;
	singlesMatchSide4: SinglesMatchSide;
	doublesMatchSide: DoublesMatchSide;
}