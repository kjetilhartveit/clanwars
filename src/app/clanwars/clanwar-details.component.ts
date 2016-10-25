import { Component, Inject, Input, SimpleChange, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { globals } from '../core/globals';
import { FormHelperService } from '../shared/form/form-helper.service';
import { Clanwar } from './clanwar';
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
	
	constructor(private formHelperService: FormHelperService,
							@Inject(NotificationsServiceToken) private notificationsService: NotificationsService) {}
		
	ngOnInit() {
//		this.countries = this.countriesService.getCountries();
	}
	
	ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
//		if ('clan' in changes) {
//			var chng = changes['clan'];
//			
//			if (chng.currentValue != null) {
//				this.players = this.playersService.getPlayersInClanOnId(chng.currentValue['id'] as number);
//			}
//		}
	}
	
	onSubmit(form: NgForm) {
		if (form.submitted && form.valid && form.dirty) {
			
			// TODO this looks dodgy. Hardcoding of field names. Change to model driven validation? 
//			this.clanwar.name = this.formHelperService.getValueAndResetState<string>(form.form.controls['name']);
//			this.clanwar.shortname = this.formHelperService.getValueAndResetState<string>(form.form.controls['shortname']);
//			this.clanwar.country = this.formHelperService.getValueAndResetState<Country>(form.form.controls['country']);
			
			this.notificationsService.addMessage('Clanwar updated', 'Clanwar successfully updated', NotificationType.Success);
		}
	}
}
