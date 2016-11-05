import { Component, Inject, Input, SimpleChange, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { globals } from '../core/globals';
import { HasSubscriptionsNg } from '../shared/has-subscriptions';
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
export class ClanDetailsComponent implements HasSubscriptionsNg, OnInit, OnChanges { 
	@Input() clan: Clan;
	
	players: Player[];
	countries: Country[];
    form: FormGroup;
    subs: Subscription[] = [];
	
	constructor(private countriesService: CountriesService, 
				private playersService: PlayersService,
				@Inject(NotificationsServiceToken) private notificationsService: NotificationsService,
                private formBuilder: FormBuilder) {
    }
		
    ngOnInit() {
        this.subs.push(
            this.countriesService.getAll().subscribe(countries => {
                this.countries = countries;
            })
        )

		this.buildForm();
	
//    this.heroForm.valueChanges
//      .subscribe(data => this.onValueChanged(data));
//    this.onValueChanged(); // (re)set validation messages now
	}
	
	ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
		if ('clan' in changes) {
			var change = changes['clan'];
			
			if (change.currentValue != null) {
                this.buildForm();

                this.subs.push(
                    this.playersService.getPlayersInClanOnId(change.currentValue['id'] as number)
                        .subscribe(players => { this.players = players; })
                );
			}
		}
    }

    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
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

    buildForm() {
        this.form = new FormGroup({
            name: new FormControl(this.clan.name, [Validators.required]),
            shortname: new FormControl(this.clan.shortname, [Validators.required]),
            country: new FormControl(this.clan.country, [Validators.required])
        });
    }
}