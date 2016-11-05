import { ReflectiveInjector }    from '@angular/core';

import { Clanwar } from './clanwar'; 
import { MatchDistance } from './match'; 
import { ClansService } from '../clans/clans.service'; 
import { PlayersService } from '../players/players.service'; 
import { MockHelper } from './mock-helper'; 

let injector = ReflectiveInjector.resolveAndCreate([ClansService]);  
let clansService: ClansService = injector.get(ClansService);

let injector2 = ReflectiveInjector.resolveAndCreate([PlayersService]);  
let playersService: PlayersService = injector2.get(PlayersService);

let matchDistance = MatchDistance.BestOf5;

let mocker = new MockHelper(playersService, matchDistance);

export const CLANWARS: Clanwar[] = [
	{
		id: 1,
		
		clan1: clansService.getOnIdSync(1),
		clan2: clansService.getOnIdSync(2),
		
		format: null,
			
		matches: mocker.createMatches4KvMYM()
	},
	{
		id: 2,
		
		clan1: clansService.getOnIdSync(3),
		clan2: clansService.getOnIdSync(4),
		
		format: null,
			
		matches: mocker.createMatchesSKvWE()
	},
	{
		id: 3,
		
		clan1: clansService.getOnIdSync(1),
		clan2: clansService.getOnIdSync(3),
		
		format: null,
			
		matches: mocker.createMatches4KvSK()
	}
];
