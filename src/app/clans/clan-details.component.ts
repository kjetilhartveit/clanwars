import { Component, Inject, Input, SimpleChange, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import {
    globals, Subscription, SubscriptionsManager, HasSubscriptionsNg,
    NotificationType, NotificationsServiceToken
} from '../core/';
import { Country } from '../countries/';
import { Player } from '../players/';
import { Clan, ClanDetailsForm } from './';
import { CountriesService } from '../countries/countries.service';
import { PlayersService } from '../players/players.service';
import { ClansService } from './clans.service';
import { NotificationsService } from '../core/notifications/notifications.service';

@Component({
	selector: globals.directiveSelector + 'clan-details',
	templateUrl: './clan-details.component.html'
})
export class ClanDetailsComponent implements HasSubscriptionsNg, OnInit, OnDestroy, OnChanges { 
	@Input() clan: Clan;
	
	players: Player[];
    countries: Country[];
    form: ClanDetailsForm;
    subs = new SubscriptionsManager();
	
	constructor(private countriesService: CountriesService, 
				private playersService: PlayersService,
				@Inject(NotificationsServiceToken) private notificationsService: NotificationsService,
                private clansService: ClansService) {
    }
		
    ngOnInit() {
        this.subs.add(
            this.countriesService.getAll().subscribe(countries => {
                this.countries = countries;
            })
        )

		this.buildForm();
	}
	
	ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
		if ('clan' in changes) {
			var change = changes['clan'];
			
			if (change.currentValue != null) {
                this.buildForm();
                
                this.playersService.getPlayersInClanOnId(change.currentValue['id'] as number)
                    .subscribe(players => {
                        this.players = players;
                    })
			}
		}
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }

    /**
     * On form submit
     */
	onSubmit() {
        if (this.form && this.form.valid && this.form.dirty) {
            this.clansService.updateEntity(this.form.toModel());

			this.form.markAsUntouched();
			this.form.markAsPristine();
			
			this.notificationsService.addMessage('Clan updated', 'Clan successfully updated', NotificationType.Success);
		}
    }

    /**
     * Builds form
     */
    buildForm() {
        if (this.clan) {
            this.form = new ClanDetailsForm(this.clan);
        }
    }
}