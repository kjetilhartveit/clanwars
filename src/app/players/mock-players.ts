import { ReflectiveInjector }    from '@angular/core';

import { Player } from './player';  
import { CountriesService } from '../countries/countries.service'; 
import { RacesService } from '../races/races.service'; 
import { ClansService } from '../clans/clans.service'; 

let injector = ReflectiveInjector.resolveAndCreate([CountriesService]);  
let countriesService: CountriesService = injector.get(CountriesService);

let injector2 = ReflectiveInjector.resolveAndCreate([RacesService]);  
let racesService: RacesService = injector2.get(RacesService);

let injector3 = ReflectiveInjector.resolveAndCreate([ClansService]);   
let clansService: ClansService = injector3.get(ClansService);

export const PLAYERS: Player[] = [
	// Four Kings!
	{ 
		id: 1, nickname: 'ToD', firstname: 'Yoan', lastname: 'Merlo', 
		country: countriesService.getOnAlpha2Code( 'fr' ), 
		race: racesService.getOnId('human'), 
		clan: clansService.getOnIdSync( 1 )
	},
	{
		id: 2, nickname: 'Grubby', firstname: 'Manuel', lastname: 'Schenkhuizen', 
		country: countriesService.getOnAlpha2Code( 'nl' ), 
		race: racesService.getOnId('orc'), 
		clan: clansService.getOnIdSync( 1 )
	},
	{
		id: 3, nickname: 'Creolophus', firstname: 'Olav', lastname: 'Undheim', 
		country: countriesService.getOnAlpha2Code( 'no' ), 
		race: racesService.getOnId('nightelf'), 
		clan: clansService.getOnIdSync( 1 )
	},
	{
		id: 4, nickname: 'FoV', firstname: 'Dae Hui', lastname: 'Cho', 
		country: countriesService.getOnAlpha2Code( 'kr' ), 
		race: racesService.getOnId('undead'), 
		clan: clansService.getOnIdSync( 1 )
	},
	
	// Meet Your Makers!
	{
		id: 5, nickname: 'Susiria', firstname: 'Jung-Ki', lastname: 'Oh', 
		country: countriesService.getOnAlpha2Code( 'kr' ), 
		race: racesService.getOnId('undead'), 
		clan: clansService.getOnIdSync( 2 )
	},
	{
		id: 6, nickname: 'Shy', firstname: 'Chul Woo', lastname: 'Park', 
		country: countriesService.getOnAlpha2Code( 'kr' ), 
		race: racesService.getOnId('orc'), 
		clan: clansService.getOnIdSync( 2 )
	},
	{
		id: 7, nickname: 'FoCuS', firstname: 'Hyo Sub', lastname: 'Eom', 
		country: countriesService.getOnAlpha2Code( 'kr' ), 
		race: racesService.getOnId('orc'), 
		clan: clansService.getOnIdSync( 2 )
	},
	{
		id: 8, nickname: 'Lucifer', firstname: 'JaeWook', lastname: 'Noh', 
		country: countriesService.getOnAlpha2Code( 'kr' ), 
		race: racesService.getOnId('undead'), 
		clan: clansService.getOnIdSync( 2 )
	},
	{
		id: 9, nickname: 'Moon', firstname: 'Jang', lastname: 'Jae Ho', 
		country: countriesService.getOnAlpha2Code( 'kr' ), 
		race: racesService.getOnId('nightelf'), 
		clan: clansService.getOnIdSync( 2 )
	},
	{
		id: 10, nickname: 'EVE', firstname: 'Jae Shin', lastname: 'Park', 
		country: countriesService.getOnAlpha2Code( 'kr' ), 
		race: racesService.getOnId('orc'), 
		clan: clansService.getOnIdSync( 2 )
	},
	{
		id: 11, nickname: 'Storm', firstname: 'Kim', lastname: 'JaeWoong', 
		country: countriesService.getOnAlpha2Code( 'kr' ), 
		race: racesService.getOnId('human'), 
		clan: clansService.getOnIdSync( 2 )
	},
	{
		id: 12, nickname: 'Ciara', firstname: 'Renee', lastname: 'Krag', 
		country: countriesService.getOnAlpha2Code( 'dk' ), 
		race: racesService.getOnId('orc'), 
		clan: clansService.getOnIdSync( 2 )
	},
	
	// SK Gaming!
	{
		id: 13, nickname: 'MaDFroG', firstname: 'Fredrik', lastname: 'Johansson', 
		country: countriesService.getOnAlpha2Code( 'se' ), 
		race: racesService.getOnId('undead'), 
		clan: clansService.getOnIdSync( 3 )
	},
	{
		id: 14, nickname: 'Miou', firstname: 'Daniel', lastname: 'Holthuis', 
		country: countriesService.getOnAlpha2Code( 'de' ), 
		race: racesService.getOnId('human'), 
		clan: clansService.getOnIdSync( 3 )
	},
	{
		id: 15, nickname: 'Remind', firstname: 'Sung Sik', lastname: 'Kim', 
		country: countriesService.getOnAlpha2Code( 'kr' ), 
		race: racesService.getOnId('nightelf'), 
		clan: clansService.getOnIdSync( 3 )
	},
	{
		id: 16, nickname: 'Lyn', firstname: 'June', lastname: 'Park', 
		country: countriesService.getOnAlpha2Code( 'kr' ), 
		race: racesService.getOnId('orc'), 
		clan: clansService.getOnIdSync( 3 )
	},
	{
		id: 17, nickname: 'SoJu', firstname: 'Sung Duk', lastname: 'Lee', 
		country: countriesService.getOnAlpha2Code( 'kr' ), 
		race: racesService.getOnId('nightelf'), 
		clan: clansService.getOnIdSync( 3 )
	},
	{
		id: 18, nickname: 'ReiGn', firstname: 'Seo Woo', lastname: 'Kang', 
		country: countriesService.getOnAlpha2Code( 'kr' ), 
		race: racesService.getOnId('undead'), 
		clan: clansService.getOnIdSync( 3 )
	},
	{
		id: 19, nickname: 'Zacard', firstname: 'Tae Min', lastname: 'Hwang', 
		country: countriesService.getOnAlpha2Code( 'kr' ), 
		race: racesService.getOnId('orc'), 
		clan: clansService.getOnIdSync( 3 )
	},
	
	// World Elite!
	{
		id: 20, nickname: 'Sky', firstname: 'Li', lastname: 'Xiaofeng', 
		country: countriesService.getOnAlpha2Code( 'cn' ), 
		race: racesService.getOnId('human'), 
		clan: clansService.getOnIdSync( 4 )
	},
	{
		id: 21, nickname: 'TeD', firstname: 'Zeng', lastname: 'Zhuo', 
		country: countriesService.getOnAlpha2Code( 'cn' ), 
		race: racesService.getOnId('undead'), 
		clan: clansService.getOnIdSync( 4 )
	},
	{
		id: 22, nickname: 'suhO', firstname: 'Su', lastname: 'Hao', 
		country: countriesService.getOnAlpha2Code( 'cn' ), 
		race: racesService.getOnId('nightelf'), 
		clan: clansService.getOnIdSync( 4 )
	},
	{
		id: 23, nickname: 'Infi', firstname: 'Wang', lastname: 'Yuwen', 
		country: countriesService.getOnAlpha2Code( 'cn' ), 
		race: racesService.getOnId('human'), 
		clan: clansService.getOnIdSync( 4 )
	},
];