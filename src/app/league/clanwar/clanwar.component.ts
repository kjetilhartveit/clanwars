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
		this.clanwarResult = this.clanwarHandlerService.mapAndCalculate({
			clan1: this.clanwar.clanwarSide1.clan,
			clan2: this.clanwar.clanwarSide2.clan,
			match1: {
				clan1: this.clanwar.clanwarSide1.singlesMatchSide1,
				clan2: this.clanwar.clanwarSide2.singlesMatchSide1
			},
			match2: {
				clan1: this.clanwar.clanwarSide1.singlesMatchSide2,
				clan2: this.clanwar.clanwarSide2.singlesMatchSide2
			},
			match3: {
				clan1: this.clanwar.clanwarSide1.singlesMatchSide3,
				clan2: this.clanwar.clanwarSide2.singlesMatchSide3
			},
			match4: {
				clan1: this.clanwar.clanwarSide1.singlesMatchSide4,
				clan2: this.clanwar.clanwarSide2.singlesMatchSide4
			},
			match5: {
				clan1: this.clanwar.clanwarSide1.doublesMatchSide,
				clan2: this.clanwar.clanwarSide2.doublesMatchSide
			}
		}); 
	}
}
