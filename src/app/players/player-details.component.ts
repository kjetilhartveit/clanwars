import { Component, Inject, Input, OnInit, OnChanges, OnDestroy, SimpleChange } from '@angular/core';
import { NgForm, FormGroup, Validators, FormControl } from '@angular/forms';

import {
    globals, Subscription, SubscriptionsManager, HasSubscriptionsNg,
    NotificationType, NotificationsServiceToken
} from '../core/';
import { Race } from '../races/';
import { Country } from '../countries/';
import { Clan } from '../clans/';
import { Player, PlayerDetailsForm } from './';
import { RacesService } from '../races/races.service';
import { CountriesService } from '../countries/countries.service';
import { ClansService } from '../clans/clans.service';
import { PlayersService } from './players.service';
import { NotificationsService } from '../core/notifications/notifications.service';

@Component({
	selector: globals.directiveSelector + 'player-details',
	templateUrl: './player-details.component.html'
})
export class PlayerDetailsComponent implements HasSubscriptionsNg, OnInit, OnChanges, OnDestroy { 
	@Input() player: Player;
	
	countries: Country[];
	clans: Clan[];
    races: Race[];
    form: PlayerDetailsForm;
    subs = new SubscriptionsManager();
	
	constructor(private racesService: RacesService,
				private countriesService: CountriesService, 
                private clansService: ClansService,
                private playersService: PlayersService,
                @Inject(NotificationsServiceToken) private notificationsService: NotificationsService) {
    }
	
    ngOnInit() {
        this.subs.add(
            this.racesService.getAll().subscribe(races => {
                this.races = races;
            }),
            this.countriesService.getAll().subscribe(countries => {
                this.countries = countries;
            }),
            this.clansService.getAll().subscribe(clans => {
                this.clans = clans;
            })
        );
        
        this.buildForm();
    }

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        if ('player' in changes) {
            var change = changes['player'];

            if (change.currentValue != null) {
                this.buildForm();
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
        if (this.form.valid && this.form.dirty) {
            this.playersService.updateEntity(this.form.toModel());

            this.form.markAsUntouched();
            this.form.markAsPristine();
			
			this.notificationsService.addMessage('Player updated', 'Player successfully updated', NotificationType.Success);
		}
    }

    /**
     * Build form
     */
    buildForm() {
        if (this.player) {
            this.form = new PlayerDetailsForm(this.player);
        }
    }
}