import { Component, Input, ReflectiveInjector, SimpleChange, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ConfigService } from '../shared';
import { FormHelperService } from '../form';
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
	
	constructor(private countriesService: CountriesService, 
							private playersService: PlayersService,
							private formHelperService: FormHelperService) {}
		
	ngOnInit() {
		this.countries = this.countriesService.getCountries();
	}
	
	ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
		if ('clan' in changes) {
			var chng = changes['clan'];
			
			if (chng.currentValue != null) {
				this.players = this.playersService.getPlayersInClanOnId(chng.currentValue['id'] as number);
			}
		}
	}
	
	onSubmit(form: NgForm) {
		if (form.submitted && form.valid && form.dirty) {
			
			// TODO this looks dodgy. Hardcoding of field names. Change to model driven validation? 
			this.clan.name = this.formHelperService.getValueAndResetState<string>(form.form.controls['name']);
			this.clan.shortname = this.formHelperService.getValueAndResetState<string>(form.form.controls['shortname']);
			this.clan.country = this.formHelperService.getValueAndResetState<Country>(form.form.controls['country']);
		}
	}
}