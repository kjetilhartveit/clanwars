import { Component, OnInit } from '@angular/core';

import { globals } from '../core/globals';
import { Clanwar } from './clanwar/clanwar';
import { ClanwarsService } from './clanwar/clanwars.service';

@Component({
  selector: globals.directiveSelector + 'league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {
	clanwars: Clanwar[];

  constructor(private clanwarsService: ClanwarsService) { }

  ngOnInit() {
		this.clanwars = this.clanwarsService.getClanwars();
  }

}
