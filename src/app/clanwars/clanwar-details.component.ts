import { Component, Inject, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { globals } from '../core/globals';
import { FormHelperService } from '../shared/form/form-helper.service';
import { Clanwar } from './clanwar';
import { Clan } from '../clans/clan';
import { ClansService } from '../clans/clans.service';
import { Player } from '../players/player';
import { PlayersService } from '../players/players.service';
import { NotificationType } from '../core/notifications/notification';
import { NotificationsService } from '../core/notifications/notifications.service';
import { NotificationsServiceToken } from '../core/notifications/notifications.service.token';

@Component({
  selector: globals.directiveSelector + 'clanwar-details',
  templateUrl: './clanwar-details.component.html',
  styleUrls: ['./clanwar-details.component.scss']
})
export class ClanwarDetailsComponent implements OnInit {
	@Input() 
	clanwar: Clanwar;
	
	clans: Clan[];
	players: Player[];
	
	constructor(private formHelperService: FormHelperService,
							private clansService: ClansService,
							private playersService: PlayersService,
							@Inject(NotificationsServiceToken) private notificationsService: NotificationsService) {}
		
	ngOnInit() {
		this.clans = this.clansService.getClans();
		this.players = this.playersService.getPlayers();
	}
	
	onSubmit(form: NgForm) {
		if (form.submitted && form.valid && form.dirty) {
			
			// TODO this looks dodgy. Hardcoding of field names. Change to model driven validation? 
			this.clanwar.clan1 = this.formHelperService.getValueAndResetState<Clan>(form.form.controls['clan1']);
			this.clanwar.clan2 = this.formHelperService.getValueAndResetState<Clan>(form.form.controls['clan2']);
			
			// TODO this isn't working. Maybe we need model-driven forms
//			this.clanwar.matches = this.formHelperService.getValueAndResetState<Match[]>(form.form.controls['matches']);
			
			this.notificationsService.addMessage('Clanwar updated', 'Clanwar successfully updated', NotificationType.Success);
		}
	}
}
