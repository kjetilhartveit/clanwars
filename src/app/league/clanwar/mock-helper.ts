import { Match, MatchDistance } from './match'; 
import { SinglesMatchSide } from './singles-match-side'; 
import { DoublesMatchSide } from './doubles-match-side'; 
import { SinglesMatch } from './singles-match'; 
import { DoublesMatch } from './doubles-match'; 
import { PlayersService } from '../../players/players.service'; 

export class MockHelper {
	private matchDistance: MatchDistance;
	private playersService: PlayersService;
	
	constructor(playersService: PlayersService, matchDistance: MatchDistance) {
		this.playersService = playersService;
		this.matchDistance = matchDistance;
	}

	createDoublesMatchSide(player1Id: number, player2Id: number, score: number): DoublesMatchSide {
		let side = new DoublesMatchSide();
		side.player1 = this.playersService.getPlayerOnId(player1Id);
		side.player2 = this.playersService.getPlayerOnId(player2Id);
		side.score = score;
		
		return side;
	}
	
	createMatches4KvMYM(): Match[] {	
		let match1 = this.initSinglesMatch();
		match1.side1 = this.createSinglesMatchSide(1, 2);
		match1.side2 = this.createSinglesMatchSide(5, 1);

		let match2 = this.initSinglesMatch();
		match2.side1 = this.createSinglesMatchSide(2, 2);
		match2.side2 = this.createSinglesMatchSide(6, 0);

		let match3 = this.initSinglesMatch();
		match3.side1 = this.createSinglesMatchSide(3, 1);
		match3.side2 = this.createSinglesMatchSide(7, 2);

		let match4 = this.initSinglesMatch();
		match4.side1 = this.createSinglesMatchSide(4, 2);
		match4.side2 = this.createSinglesMatchSide(8, 1);

		let match5 = this.initDoublesMatch();
		match5.side1 = this.createDoublesMatchSide(1, 2, 1);
		match5.side2 = this.createDoublesMatchSide(5, 6, 2);

		return [match1, match2, match3, match4, match5];
	}
	
	createMatchesSKvWE() {
		let match1 = this.initSinglesMatch();
		match1.side1 = this.createSinglesMatchSide(13, 2);
		match1.side2 = this.createSinglesMatchSide(20, 0);

		let match2 = this.initSinglesMatch();
		match2.side1 = this.createSinglesMatchSide(14, 0);
		match2.side2 = this.createSinglesMatchSide(21, 2);

		let match3 = this.initSinglesMatch();
		match3.side1 = this.createSinglesMatchSide(15, 1);
		match3.side2 = this.createSinglesMatchSide(22, 2);

		let match4 = this.initSinglesMatch();
		match4.side1 = this.createSinglesMatchSide(16, 2);
		match4.side2 = this.createSinglesMatchSide(23, 0);

		let match5 = this.initDoublesMatch();
		match5.side1 = this.createDoublesMatchSide(19, 16, 2);
		match5.side2 = this.createDoublesMatchSide(23, 22, 0);

		return [match1, match2, match3, match4, match5];
	}
	
	createMatches4KvSK() {
		let match1 = this.initSinglesMatch();
		match1.side1 = this.createSinglesMatchSide(1, 2);
		match1.side2 = this.createSinglesMatchSide(13, 1);

		let match2 = this.initSinglesMatch();
		match2.side1 = this.createSinglesMatchSide(2, 2);
		match2.side2 = this.createSinglesMatchSide(14, 0);

		let match3 = this.initSinglesMatch();
		match3.side1 = this.createSinglesMatchSide(3, 2);
		match3.side2 = this.createSinglesMatchSide(16, 1);

		let match4 = this.initSinglesMatch();
		match4.side1 = this.createSinglesMatchSide(4, 2);
		match4.side2 = this.createSinglesMatchSide(18, 1);

		let match5 = this.initDoublesMatch();
		match5.side1 = this.createDoublesMatchSide(3, 4, 1);
		match5.side2 = this.createDoublesMatchSide(18, 17, 2);

		return [match1, match2, match3, match4, match5];
	}
	
	createSinglesMatchSide(playerId: number, score: number): SinglesMatchSide {
		let side = new SinglesMatchSide();
		side.player = this.playersService.getPlayerOnId(playerId);
		side.score = score;
		
		return side;
	}
	
	initDoublesMatch(): DoublesMatch {
		let match = new DoublesMatch();
		match.distance = this.matchDistance;
		
		return match;
	}	
	
	initSinglesMatch(): SinglesMatch {
		let match = new SinglesMatch();
		match.distance = this.matchDistance;
		
		return match;
	}	
}
