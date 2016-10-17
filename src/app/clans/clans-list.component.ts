import { Component, OnInit } from '@angular/core';
import { ReflectiveInjector } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ConfigService, PathsService } from '../shared';
import { Clan, ClansService } from './';

// TODO Can we prettify this?
let injector = ReflectiveInjector.resolveAndCreate([ConfigService]);
let config: ConfigService = injector.get(ConfigService);

@Component({
	moduleId: module.id,
	selector: config.getDirectiveSelectorPrefix() + 'clans-list',
	templateUrl: config.getAppPath() + '/clans/clans-list.component.html',
	styleUrls:  [config.getAppPath() + '/clans/clans-list.component.min.css'] 
})

export class ClansListComponent implements OnInit {
	clans: Clan[] = [];
	
	selectedClan: Clan;
	
	constructor(private route: ActivatedRoute,
							private router: Router, 
							private clansService: ClansService,
							private pathsService: PathsService) {}
	
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