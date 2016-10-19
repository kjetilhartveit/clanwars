import { ReflectiveInjector }    from '@angular/core';

import { Clanwar } from './clanwar'; 
import { ClansService } from '../../clans/clans.service'; 
import { PlayersService } from '../../players/players.service'; 

let injector = ReflectiveInjector.resolveAndCreate([ClansService]);  
let clansService: ClansService = injector.get(ClansService);

let injector2 = ReflectiveInjector.resolveAndCreate([PlayersService]);  
let playersService: PlayersService = injector2.get(PlayersService);

export const CLANWARS: Clanwar[] = [
	{
		id: 1,
		clanwarSide1: {
			clan: clansService.getClanOnId(1),
			singlesMatchSide1: {
				player: playersService.getPlayerOnId(1),
				score: 2
			},
			singlesMatchSide2: {
				player: playersService.getPlayerOnId(2),
				score: 2
			},
			singlesMatchSide3: {
				player: playersService.getPlayerOnId(3),
				score: 1
			},
			singlesMatchSide4: {
				player: playersService.getPlayerOnId(4),
				score: 2
			},
			doublesMatchSide: {
				player1: playersService.getPlayerOnId(1),
				player2: playersService.getPlayerOnId(2),
				score: 1
			}
		},
		clanwarSide2: {
			clan: clansService.getClanOnId(2),
			singlesMatchSide1: {
				player: playersService.getPlayerOnId(5),
				score: 1
			},
			singlesMatchSide2: {
				player: playersService.getPlayerOnId(6),
				score: 0
			},
			singlesMatchSide3: {
				player: playersService.getPlayerOnId(7),
				score: 2
			},
			singlesMatchSide4: {
				player: playersService.getPlayerOnId(8),
				score: 1
			},
			doublesMatchSide: {
				player1: playersService.getPlayerOnId(5),
				player2: playersService.getPlayerOnId(6),
				score: 2
			}
		}
	}
];