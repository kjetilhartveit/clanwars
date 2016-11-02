import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { globals } from '../core/globals';
import { HasSubscriptionsNgLifecycles } from '../shared/has-subscriptions';
import { Clanwar } from './clanwar';
import { ClanwarsService } from './clanwars.service';
import { EditEntityTemplateService } from '../shared/edit-entity-template/edit-entity-template.service';

@Component({
	selector: globals.directiveSelector + 'clanwars-list',
	templateUrl: './clanwars-list.component.html',
	styleUrls: ['./clanwars-list.component.scss'],
	providers: [EditEntityTemplateService]
})
export class ClanwarsListComponent implements HasSubscriptionsNgLifecycles, OnInit {
	clanwars: Clanwar[] = [];
	selectedClanwar: Clanwar;
	subs: Subscription[] = [];
	
	constructor(private route: ActivatedRoute,
				private router: Router, 
				private clanwarsService: ClanwarsService,
				private editEntityTemplateService: EditEntityTemplateService<Clanwar>) {
	}

	onSelect(clanwar: Clanwar) {
		this.router.navigate(['/clanwars', clanwar.id]);
		this.selectedClanwar = clanwar;
	}
	
	ngOnInit() {
		this.clanwars = this.clanwarsService.getClanwars();
		
		this.route.params.forEach((params: Params) => {
			let id = +params['id']; // (+) converts string 'id' to a number
			 
			if (id) {
				let clanwar = this.clanwarsService.getOnId(id);

				if (clanwar) {
					this.editEntityTemplateService.selectItem.next(clanwar);			 
				}
			}
		});
	 
		// No selected item. Load first player
		if (!this.editEntityTemplateService.selectItem.value) {
			this.editEntityTemplateService.selectItem.next(this.clanwars[0]);
		}
		
		this.subs.push(
			this.editEntityTemplateService.selectItem.subscribe((item) => {
				this.onSelect(item);
			})
		);
	}
	
	ngOnDestroy() {
		this.subs.forEach((sub) => {
			sub.unsubscribe();
		})
	}
}
