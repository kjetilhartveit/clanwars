import { Country } from '../countries/country';
import { Clan } from '../clans/clan';
import { Race } from '../races/race';

export class Player {
	id: number;
  nickname: string;
  firstname: string;
  lastname: string;
  country: Country;
  race: Race;
  clan: Clan;
}