import { Component, Inject, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

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
export class PlayerDetailsComponent implements OnInit, OnChanges { 
	@Input() player: Player;
	
	countries: Country[];
	clans: Clan[];
    races: Race[];
    form: FormGroup;
	
	constructor(private racesService: RacesService,
				private countriesService: CountriesService, 
				private clansService: ClansService,
                private formHelperService: FormHelperService,
                private formBuilder: FormBuilder,
                @Inject(NotificationsServiceToken) private notificationsService: NotificationsService) {
    }
	
	ngOnInit() {
		this.races = this.racesService.getRaces();
        this.countries = this.countriesService.getCountries();

        this.clansService.getAll().subscribe(clans => {
            this.clans = clans;
        });
        
        this.buildForm();
    }

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        if ('player' in changes) {
            var chng = changes['player'];

            if (chng.currentValue != null) {
                this.buildForm();
            }
        }
    }

	
	onSubmit() {
		if (this.form.valid && this.form.dirty) {
            this.player.nickname = this.form.controls['nickname'].value;
            this.player.firstname = this.form.controls['firstname'].value;
            this.player.lastname = this.form.controls['lastname'].value;
            this.player.country = this.form.controls['country'].value;
            this.player.race = this.form.controls['race'].value;
            this.player.clan = this.form.controls['clan'].value;

            this.form.markAsUntouched();
            this.form.markAsPristine();
			
			this.notificationsService.addMessage('Player updated', 'Player successfully updated', NotificationType.Success);
		}
    }

    buildForm() {
        this.form = new FormGroup({
            nickname: new FormControl(this.player.nickname, [Validators.required]),
            firstname: new FormControl(this.player.firstname, [Validators.required]),
            lastname: new FormControl(this.player.lastname, [Validators.required]),
            country: new FormControl(this.player.country, [Validators.required]),
            race: new FormControl(this.player.race, [Validators.required]),
            clan: new FormControl(this.player.clan, [Validators.required])
        });
    }
}