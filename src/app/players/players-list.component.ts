import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { globals } from '../core/globals';
import { Player } from './player';
import { PlayersService } from './players.service';
import { EditEntityTemplateService } from '../shared/edit-entity-template/edit-entity-template.service';

@Component({
	selector: globals.directiveSelector + 'players-list',
	templateUrl: './players-list.component.html',
	styleUrls:  ['./players-list.component.scss'],
	providers: [EditEntityTemplateService]
})
export class PlayersListComponent implements OnInit, OnDestroy {
	players: Player[] = [];
	selectedPlayer: Player;
	subs: Subscription[] = [];
	
	constructor(private route: ActivatedRoute,
							private router: Router,
							private playersService: PlayersService,
							private editEntityTemplateService: EditEntityTemplateService<Player>) {
	}
	
	onSelectPlayer(player: Player): void {
    this.router.navigate(['/players', player.id]);
		this.selectedPlayer = player;
  }
	
	ngOnInit() {
    this.players = this.playersService.getPlayers();
		
		this.subs.push(
			this.editEntityTemplateService.selectItem.skip(1).subscribe((item) => {
				this.onSelectPlayer(item);
			})
		);
		
		this.route.params.forEach((params: Params) => {
			 let id = +params['id']; // (+) converts string 'id' to a number
			 
			 if (id) {
				 let player = this.playersService.getPlayerOnId(id);

				 if (player) {
					 this.editEntityTemplateService.selectItem.next(player);			 
				 }
			 }
		 });
		 
		// No selected item. Load first player
		if (!this.editEntityTemplateService.selectItem.value) {
			this.editEntityTemplateService.selectItem.next(this.players[0]);
		}
  }
	
	ngOnDestroy() {
		this.subs.forEach((sub) => {
			sub.unsubscribe();
		})
	}
}