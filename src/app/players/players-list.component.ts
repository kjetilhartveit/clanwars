import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { globals, Subscription, SubscriptionsManager, HasSubscriptionsNg } from '../core/';
import { Player } from './';
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
    subs = new SubscriptionsManager();
	
	constructor(private route: ActivatedRoute,
			    private router: Router,
			    private playersService: PlayersService,
			    private editEntityTemplateService: EditEntityTemplateService<Player>) {
	}
	
    ngOnInit() {
        let getAllPlayersSub = this.playersService.getAll().subscribe(players => {
            this.players = players;
        });

        let entityChangesSub = this.editEntityTemplateService.entityChanges.skip(1).subscribe(player => {
            this.onSelectPlayer(player);
        });
		
        let paramsSub = this.route.params.subscribe((params: Params) => {
            let id = +params['id']; // (+) converts string 'id' to a number

            if (id) {
                // Select entity on ID
                this.subs.add(
                    this.playersService.getOnId(id).subscribe(player => {
                        if (player) {
                            this.editEntityTemplateService.entityChanges.next(player);
                        }
                    })
                );
            } else {
                // Select first entity from list
                this.subs.add(
                    this.playersService.getAll().subscribe(players => {
                        this.players = players;

                        if (players) {
                            this.editEntityTemplateService.entityChanges.next(players[0]);
                        }
                    })
                );
            }
        });

        this.subs.add(getAllPlayersSub, entityChangesSub, paramsSub);
    }
	
    ngOnDestroy() {
        this.subs.unsubscribe();
    }

    onSelectPlayer(player: Player): void {
        this.router.navigate(['/players', player.id]);
        this.selectedPlayer = player;
    }
}
