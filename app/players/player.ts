import { Country } from '../countries';
import { Clan } from '../clans';
import { Race } from '../races';

export class Player {
	id: number;
  nickname: string;
  firstname: string;
  lastname: string;
  country: Country;
  race: Race;
  clan: Clan;
}