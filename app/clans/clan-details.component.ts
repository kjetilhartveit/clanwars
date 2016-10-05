import { Component, Input, ReflectiveInjector, SimpleChange, OnInit } from '@angular/core';

import { ConfigService } from '../shared';
import { Country, CountriesService } from '../countries';
import { Clan } from './';
import { Player, PlayersService } from '../players';

// TODO Can we prettify this?
let injector = ReflectiveInjector.resolveAndCreate([ConfigService]);
let config: ConfigService = injector.get(ConfigService);

@Component({
	moduleId: module.id,
	selector: config.getDirectiveSelectorPrefix() + 'clan-details',
	templateUrl: config.getAppPath() + '/clans/clan-details.component.html'
})

export class ClanDetailsComponent implements OnInit { 
	@Input() 
	clan: Clan;
	
	players: Player[];
	
	countries: Country[];
	
	constructor(private countriesService: CountriesService, private playersService: PlayersService) {}
		
	ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
		if ( 'clan' in changes ) {
			var chng = changes['clan'];
			
			if ( chng.currentValue != null ) {
				this.players = this.playersService.getPlayersInClanOnId(chng.currentValue['id'] as number);
			}
		}
	}
	
	ngOnInit() {
		this.countries = this.countriesService.getCountries();
	}
}