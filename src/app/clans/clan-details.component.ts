import { Component, Inject, Input, SimpleChange, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { globals } from '../core/globals';
import { FormHelperService } from '../shared/form/form-helper.service';
import { Country } from '../countries/country';
import { CountriesService } from '../countries/countries.service';
import { Clan } from './clan';
import { Player } from '../players/player';
import { PlayersService } from '../players/players.service';
import { NotificationType } from '../core/notifications/notification';
import { NotificationsService, NotificationsServiceToken } from '../core/notifications/notifications.service';

@Component({
	selector: globals.directiveSelector + 'clan-details',
	templateUrl: './clan-details.component.html'
})
export class ClanDetailsComponent implements OnInit { 
	@Input() 
	clan: Clan;
	
	players: Player[];
	
	countries: Country[];
	
	constructor(private countriesService: CountriesService, 
							private playersService: PlayersService,
							private formHelperService: FormHelperService,
							@Inject(NotificationsServiceToken) private notificationsService: NotificationsService) {}
		
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
			
			this.notificationsService.addMessage('Clan updated', 'Clan successfully updated', NotificationType.Success);
		}
	}
}