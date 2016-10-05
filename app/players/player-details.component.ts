import { Component, Input, ReflectiveInjector, OnInit } from '@angular/core';

import { ConfigService } from '../shared';
import { Race, RacesService } from '../races';
import { Country, CountriesService } from '../countries';
import { Clan, ClansService } from '../clans';
import { Player } from './';

// TODO Can we prettify this?
let injector = ReflectiveInjector.resolveAndCreate([ConfigService]);
let config: ConfigService = injector.get(ConfigService);

@Component({
	moduleId: module.id,
	selector: config.getDirectiveSelectorPrefix() + 'player-details',
	templateUrl: config.getAppPath() + '/players/player-details.component.html'
})

export class PlayerDetailsComponent implements OnInit { 
	@Input() 
	player: Player;
	
	countries: Country[];
	clans: Clan[];
	races: Race[];
	
	constructor(private racesService: RacesService,
							private countriesService: CountriesService, 
							private clansService: ClansService) {}
	
	ngOnInit() {
		this.races = this.racesService.getRaces();
		this.countries = this.countriesService.getCountries();
		this.clans = this.clansService.getClans();
	}
}