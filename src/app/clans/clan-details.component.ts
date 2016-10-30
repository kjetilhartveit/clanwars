import { Component, Inject, Input, SimpleChange, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { globals } from '../core/globals';
import { Country } from '../countries/country';
import { CountriesService } from '../countries/countries.service';
import { Clan } from './clan';
import { Player } from '../players/player';
import { PlayersService } from '../players/players.service';
import { NotificationType } from '../core/notifications/notification';
import { NotificationsService } from '../core/notifications/notifications.service';
import { NotificationsServiceToken } from '../core/notifications/notifications.service.token';

@Component({
	selector: globals.directiveSelector + 'clan-details',
	templateUrl: './clan-details.component.html'
})
export class ClanDetailsComponent implements OnInit { 
	@Input() 
	clan: Clan;
	
	players: Player[];
	countries: Country[];
	form: FormGroup;
	
	constructor(private countriesService: CountriesService, 
							private playersService: PlayersService,
							@Inject(NotificationsServiceToken) private notificationsService: NotificationsService,
							private formBuilder: FormBuilder) {}
		
	ngOnInit() {
		this.countries = this.countriesService.getCountries();
	
		this.buildForm();
	
//    this.heroForm.valueChanges
//      .subscribe(data => this.onValueChanged(data));
//    this.onValueChanged(); // (re)set validation messages now
	}
	
	ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
		if ('clan' in changes) {
			var chng = changes['clan'];
			
			if (chng.currentValue != null) {
				this.buildForm();
				this.players = this.playersService.getPlayersInClanOnId(chng.currentValue['id'] as number);
			}
		}
	}
	
	buildForm() {
		this.form = this.formBuilder.group({
			name: [this.clan.name, [
          Validators.required,
//          Validators.minLength(4),
//          Validators.maxLength(24),
        ]
      ],
			shortname: [this.clan.shortname, [Validators.required]],
      country:   [this.clan.country, [Validators.required]]
    });
	}
	
	onSubmit() {
		if (this.form && this.form.valid && this.form.dirty) {
			this.clan.name = this.form.controls['name'].value;
			this.clan.shortname = this.form.controls['shortname'].value;
			this.clan.country = this.form.controls['country'].value;
			
			this.form.markAsUntouched();
			this.form.markAsPristine();
			
			this.notificationsService.addMessage('Clan updated', 'Clan successfully updated', NotificationType.Success);
		}
	}
}