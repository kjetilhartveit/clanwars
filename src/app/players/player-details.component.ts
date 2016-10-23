import { Component, Inject, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { globals } from '../core/globals';
import { Player } from './player';
import { FormHelperService } from '../shared/form/form-helper.service';
import { Race } from '../races/race';
import { RacesService } from '../races/races.service';
import { Country } from '../countries/country';
import { CountriesService } from '../countries/countries.service';
import { Clan } from '../clans/clan';
import { ClansService } from '../clans/clans.service';
import { NotificationType } from '../core/notifications/notification';
import { NotificationsService } from '../core/notifications/notifications.service';
import { NotificationsServiceToken } from '../core/notifications/notifications.service.token';

@Component({
	selector: globals.directiveSelector + 'player-details',
	templateUrl: './player-details.component.html'
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
							private formHelperService: FormHelperService,
							@Inject(NotificationsServiceToken) private notificationsService: NotificationsService) {}
	
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
						
			this.notificationsService.addMessage('Player updated', 'Player successfully updated', NotificationType.Success);
		}
	}
}