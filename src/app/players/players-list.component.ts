import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { globals } from '../core/globals';
import { Player } from './player';
import { PlayersService } from './players.service';

@Component({
	selector: globals.directiveSelector + 'players-list',
	templateUrl: './players-list.component.html',
	styleUrls:  ['./players-list.component.scss'] 
})
export class PlayersListComponent implements OnInit {
	players: Player[] = [];
	
	selectedPlayer: Player;
	
	constructor(private route: ActivatedRoute,
							private router: Router, 
							private playersService: PlayersService) {}
	
	onSelect(player: Player): void {
    this.router.navigate(['/players', player.id]);
//    this.selectedPlayer = player;
  }
	
	ngOnInit() {
    this.players = this.playersService.getPlayers();
		
		this.route.params.forEach((params: Params) => {
			 let id = +params['id']; // (+) converts string 'id' to a number
			 
			 this.selectedPlayer = this.playersService.getPlayerOnId(id);
		 });
		 
		if (this.selectedPlayer == null && this.players != null && this.players.length > 0) {
			this.onSelect(this.players[0]);
		}
  }
}