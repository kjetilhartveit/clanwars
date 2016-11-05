import { Component, OnInit } from '@angular/core';

import { globals } from '../core/globals';
import { ClanwarResult } from '../clanwars/clanwar-result';
import { ClanwarsService } from '../clanwars/clanwars.service';
import { ClanwarsHandlerService } from '../clanwars/clanwars-handler.service';
import { Subscription } from 'rxjs';

import { HasSubscriptions } from '../shared/has-subscriptions';

@Component({
    selector: globals.directiveSelector + 'league',
    templateUrl: './league.component.html',
    styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements HasSubscriptions, OnInit {
	clanwarResults: ClanwarResult[];
    subs: Subscription[] = [];

    constructor(private clanwarsService: ClanwarsService,
				private clanwarsHandlerService: ClanwarsHandlerService) { 
    }

    ngOnInit() {
        this.subs.push(
            this.clanwarsService.getAll().subscribe(clanwars => {
                this.clanwarResults = clanwars.map(clanwar => {
                    return this.clanwarsHandlerService.calculateResults(clanwar)
                });
            })
        );
    }

    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
}
