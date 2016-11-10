import { Component, Inject, Input, OnInit, OnChanges, OnDestroy, SimpleChange } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

import {
    globals, Subscription, SubscriptionsManager, HasSubscriptionsNg,
    Notification, NotificationsServiceToken, NotificationType
} from '../core/';
import { Clan } from '../clans/';
import { Player } from '../players/';
import { Clanwar, MatchesFormArray, ClanwarDetailsForm } from './';
import { ClansService } from '../clans/clans.service';
import { PlayersService } from '../players/players.service';
import { ClanwarsService } from './clanwars.service';
import { NotificationsService } from '../core/notifications/notifications.service';

@Component({
	selector: globals.directiveSelector + 'clanwar-details',
	templateUrl: './clanwar-details.component.html',
	styleUrls: ['./clanwar-details.component.scss']
})
export class ClanwarDetailsComponent implements HasSubscriptionsNg, OnInit, OnChanges, OnDestroy {
	@Input() clanwar: Clanwar;
	
	clans: Clan[];
    players: Player[];
    form: ClanwarDetailsForm;
    subs = new SubscriptionsManager();
	
	constructor(private clansService: ClansService,
                private playersService: PlayersService,
                private clanwarsService: ClanwarsService,
				@Inject(NotificationsServiceToken) private notificationsService: NotificationsService) {
    }

    ngOnInit() {
        this.subs.add(
            this.clansService.getAll().subscribe(clans => {
                this.clans = clans;
            }),
            this.playersService.getAll().subscribe(players => {
                this.players = players;
            })
        );
        
		this.buildForm();
	}
	
	ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
		if ('clanwar' in changes) {
			var change = changes['clanwar'];
			
			if (change.currentValue != null) {
				this.buildForm();
			}
		}
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }

    /**
     * Builds form
     */
    buildForm() {
        if (this.clanwar) {
            this.form = new ClanwarDetailsForm(this.clanwar);
        }
	}
	
	onSubmit() {
        if (this.form.valid && this.form.dirty) {
            this.clanwar = this.form.toModel();
            this.clanwarsService.updateEntity(this.clanwar);

			this.form.markAsUntouched();
			this.form.markAsPristine();
			
			this.notificationsService.addMessage('Clanwar updated', 'Clanwar successfully updated', NotificationType.Success);
		}
	}
}