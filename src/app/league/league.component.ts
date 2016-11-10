import { Component, OnInit } from '@angular/core';

import { globals, Subscription, SubscriptionsManager, HasSubscriptionsNg } from '../core/';
import { ClanwarResult } from '../clanwars/';
import { ClanwarsService } from '../clanwars/clanwars.service';
import { ClanwarsHandlerService } from '../clanwars/clanwars-handler.service';

@Component({
    selector: globals.directiveSelector + 'league',
    templateUrl: './league.component.html',
    styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements HasSubscriptionsNg, OnInit {
    clanwarResults: ClanwarResult[];
    subs = new SubscriptionsManager();

    constructor(private clanwarsService: ClanwarsService,
				private clanwarsHandlerService: ClanwarsHandlerService) { 
    }

    ngOnInit() {
        this.subs.add(
            this.clanwarsService.getAll().subscribe(clanwars => {
                this.clanwarResults = clanwars.map(clanwar => {
                    return this.clanwarsHandlerService.calculateResults(clanwar)
                });
            })
        );
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
