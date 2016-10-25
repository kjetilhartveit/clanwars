import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { globals } from '../core/globals';
import { Clanwar } from './clanwar';
import { ClanwarsService } from './clanwars.service';

@Component({
  selector: globals.directiveSelector + 'clanwars-list',
  templateUrl: './clanwars-list.component.html',
  styleUrls: ['./clanwars-list.component.scss']
})
export class ClanwarsListComponent implements OnInit {
	clanwars: Clanwar[] = [];
	
	selectedClanwar: Clanwar;
	
	constructor(private route: ActivatedRoute,
							private router: Router, 
							private clanwarsService: ClanwarsService) {}
	
	onSelect(clanwar: Clanwar): void {
    this.router.navigate(['/clanwars', clanwar.id]);
//    this.selectedClan = clan;
  }
	
	ngOnInit() {
    this.clanwars = this.clanwarsService.getClanwars();
		
		this.route.params.forEach((params: Params) => {
			 let id = +params['id']; // (+) converts string 'id' to a number
			 
			 this.selectedClanwar = this.clanwarsService.getOnId(id);
		 });
	 
		if (this.selectedClanwar == null && this.clanwars != null && this.clanwars.length > 0) {
			this.onSelect(this.clanwars[0]);
		}
  }
}
