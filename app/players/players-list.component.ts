import { Component, OnInit } from '@angular/core';
import { ReflectiveInjector } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ConfigService } from '../shared';
import { WebHelperService } from '../web';
import { Player, PlayersService } from './';

// TODO Can we prettify this?
let injector = ReflectiveInjector.resolveAndCreate([ConfigService]);
let config: ConfigService = injector.get(ConfigService);

@Component({
	moduleId: module.id,
	selector: config.getDirectiveSelectorPrefix() + 'players-list',
	templateUrl: config.getAppPath() + '/players/players-list.component.html',
	styleUrls:  [config.getAppPath() + '/players/players-list.component.min.css'] 
})

export class PlayersListComponent implements OnInit {
	players: Player[] = [];
	
	selectedPlayer: Player;
	
	constructor(private route: ActivatedRoute,
							private router: Router, 
							private playersService: PlayersService,
							private webHelper: WebHelperService) {}
	
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