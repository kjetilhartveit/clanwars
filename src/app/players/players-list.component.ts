import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { globals } from '../core/globals';
import { HasSubscriptionsNgLifecycles } from '../shared/has-subscriptions';
import { Player } from './player';
import { PlayersService } from './players.service';
import { EditEntityTemplateService } from '../shared/edit-entity-template/edit-entity-template.service';

@Component({
	selector: globals.directiveSelector + 'players-list',
	templateUrl: './players-list.component.html',
	styleUrls:  ['./players-list.component.scss'],
	providers: [EditEntityTemplateService]
})
export class PlayersListComponent implements HasSubscriptionsNgLifecycles, OnInit, OnDestroy {
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
		
		this.subs.push(
			this.editEntityTemplateService.selectItem.subscribe((item) => {
				this.onSelectPlayer(item);
			})
		);
  }
	
	ngOnDestroy() {
		this.subs.forEach((sub) => {
			sub.unsubscribe();
		})
	}
}