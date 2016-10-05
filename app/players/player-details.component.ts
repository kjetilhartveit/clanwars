import { Component, Input, ReflectiveInjector, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ConfigService } from '../shared';
import { FormHelperService } from '../forms';
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
							private clansService: ClansService,
							private formHelperService: FormHelperService) {}
	
	ngOnInit() {
		this.races = this.racesService.getRaces();
		this.countries = this.countriesService.getCountries();
		this.clans = this.clansService.getClans();
	}
	
	onSubmit(form: NgForm) {
		if (form.submitted && form.valid && form.dirty) {
			
			// TODO this looks dodgy. Hardcoding of field names. Change to model driven validation? 
			this.player.nickname = this.formHelperService.getValueAndResetState<string>(form.form.controls['nickname']);
			this.player.firstname = this.formHelperService.getValueAndResetState<string>(form.form.controls['firstname']);
			this.player.lastname = this.formHelperService.getValueAndResetState<string>(form.form.controls['surname']);
			this.player.country = this.formHelperService.getValueAndResetState<Country>(form.form.controls['country']);
			this.player.race = this.formHelperService.getValueAndResetState<Race>(form.form.controls['race']);
			this.player.clan = this.formHelperService.getValueAndResetState<Clan>(form.form.controls['clan']);
		}
	}
}