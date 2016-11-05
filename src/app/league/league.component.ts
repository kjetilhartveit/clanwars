import { Component, OnInit } from '@angular/core';

import { globals } from '../core/globals';
import { ClanwarResult } from '../clanwars/clanwar-result';
import { ClanwarsService } from '../clanwars/clanwars.service';
import { ClanwarsHandlerService } from '../clanwars/clanwars-handler.service';

@Component({
    selector: globals.directiveSelector + 'league',
    templateUrl: './league.component.html',
    styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {
	clanwarResults: ClanwarResult[];

    constructor(private clanwarsService: ClanwarsService,
				private clanwarsHandlerService: ClanwarsHandlerService) { 
    }

    ngOnInit() {
        this.clanwarResults = this.clanwarsService.getClanwars().map(clanwar => 
            this.clanwarsHandlerService.calculateResults(clanwar)
	    );
    }

}
