import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { globals } from '../core/globals';
import { HasSubscriptionsNg } from '../shared/has-subscriptions';
import { Player } from './player';
import { PlayersService } from './players.service';
import { EditEntityTemplateService } from '../shared/edit-entity-template/edit-entity-template.service';

@Component({
	selector: globals.directiveSelector + 'players-list',
	templateUrl: './players-list.component.html',
	styleUrls:  ['./players-list.component.scss'],
	providers: [EditEntityTemplateService]
})
export class PlayersListComponent implements HasSubscriptionsNg, OnInit, OnDestroy {
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
        this.subs.push(
            this.playersService.getAll().subscribe(players => {
                this.players = players;
            }),
            this.editEntityTemplateService.entityChanges.skip(1).subscribe(player => {
                this.onSelectPlayer(player);
            })
        );
		
        this.route.params.forEach((params: Params) => {
            let id = +params['id']; // (+) converts string 'id' to a number

            if (id) {
                this.subs.push(
                    this.playersService.getOnId(id).subscribe(player => {
                        if (player) {
                            this.editEntityTemplateService.entityChanges.next(player);
                        }
                    })
                );
            } else {
                this.subs.push(
                    this.playersService.getAll().subscribe(players => {
                        this.players = players;

                        if (players) {
                            this.editEntityTemplateService.entityChanges.next(this.players[0]);
                        }
                    })
                );
            }
        });
  }
	
	ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
	}
}
