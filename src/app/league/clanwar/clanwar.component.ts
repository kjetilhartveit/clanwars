import { Component, Input, OnInit } from '@angular/core';

import { globals } from '../../core/globals';
import { Clanwar } from './clanwar';
import { ClanwarResult } from './clanwar-result';
import { ClanwarHandlerService } from './clanwar-handler.service';

@Component({
  selector: globals.directiveSelector + 'clanwar',
  templateUrl: './clanwar.component.html',
  styleUrls: ['./clanwar.component.scss']
})
export class ClanwarComponent implements OnInit {
	@Input()
	clanwar: Clanwar;
	
	clanwarResult: ClanwarResult;
	
	constructor(private clanwarHandlerService: ClanwarHandlerService) {}
	
	ngOnInit() {
		this.clanwarResult = this.clanwarHandlerService.calculateResults(this.clanwar);
	}
}
