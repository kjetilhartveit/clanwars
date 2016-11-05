import { Component, Inject, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { globals } from '../core/globals';
import { HasSubscriptionsNg } from '../shared/has-subscriptions';
import { Clanwar } from './clanwar';
import { Clan } from '../clans/clan';
import { ClansService } from '../clans/clans.service';
import { Player } from '../players/player';
import { PlayersService } from '../players/players.service';
import { MatchesFormArray } from './matches-form-array';
import { NotificationType } from '../core/notifications/notification';
import { NotificationsService } from '../core/notifications/notifications.service';
import { NotificationsServiceToken } from '../core/notifications/notifications.service.token';

@Component({
	selector: globals.directiveSelector + 'clanwar-details',
	templateUrl: './clanwar-details.component.html',
	styleUrls: ['./clanwar-details.component.scss']
})
export class ClanwarDetailsComponent implements HasSubscriptionsNg, OnInit, OnChanges {
	@Input() clanwar: Clanwar;
	
	clans: Clan[];
	players: Player[];
    form: FormGroup;
    subs: Subscription[] = [];
	
	constructor(private clansService: ClansService,
				private playersService: PlayersService,
				@Inject(NotificationsServiceToken) private notificationsService: NotificationsService) {
	}
		
    ngOnInit() {
        this.subs.push(
            this.clansService.getAll().subscribe(clans => {
                this.clans = clans;
            }),
            this.playersService.getAll().subscribe(players => {
                this.players = players;
            })
        );;
        
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
    }
	
	buildForm() {
		this.form = new FormGroup({
			clan1: new FormControl(this.clanwar.clan1, [Validators.required]),
			clan2: new FormControl(this.clanwar.clan2, [Validators.required]),
			matches: new MatchesFormArray(this.clanwar.matches)
		});
	}
	
	onSubmit() {
		if (this.form.valid && this.form.dirty) {
			this.clanwar.clan1 = this.form.controls['clan1'].value;
			this.clanwar.clan2 = this.form.controls['clan2'].value;
			this.clanwar.matches = this.form.controls['matches'].value;

			this.form.markAsUntouched();
			this.form.markAsPristine();
			
			this.notificationsService.addMessage('Clanwar updated', 'Clanwar successfully updated', NotificationType.Success);
		}
	}
}
