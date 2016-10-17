import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { globals } from '../core';
import { Clan, ClansService } from './';

@Component({
	selector: globals.directiveSelector + 'clans-list',
	templateUrl: './clans-list.component.html',
	styleUrls:  ['./clans-list.component.scss'] 
})
export class ClansListComponent implements OnInit {
	clans: Clan[] = [];
	
	selectedClan: Clan;
	
	constructor(private route: ActivatedRoute,
							private router: Router, 
							private clansService: ClansService) {}
	
	onSelect(clan: Clan): void {
    this.router.navigate(['/clans', clan.id]);
//    this.selectedClan = clan;
  }
	
	ngOnInit() {
    this.clans = this.clansService.getClans();
		
		this.route.params.forEach((params: Params) => {
			 let id = +params['id']; // (+) converts string 'id' to a number
			 
			 this.selectedClan = this.clansService.getClanOnId(id);
		 });
	 
		if (this.selectedClan == null && this.clans != null && this.clans.length > 0) {
			this.onSelect(this.clans[0]);
		}
  }
}