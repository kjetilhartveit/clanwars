import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { globals } from '../core/globals';
import { HasSubscriptionsNg } from '../shared/has-subscriptions';
import { Clanwar } from './clanwar';
import { ClanwarsService } from './clanwars.service';
import { EditEntityTemplateService } from '../shared/edit-entity-template/edit-entity-template.service';

@Component({
	selector: globals.directiveSelector + 'clanwars-list',
	templateUrl: './clanwars-list.component.html',
	styleUrls: ['./clanwars-list.component.scss'],
	providers: [EditEntityTemplateService]
})
export class ClanwarsListComponent implements HasSubscriptionsNg, OnInit {
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
        this.subs.push(
            this.clanwarsService.getAll().subscribe(clanwars => {
                this.clanwars = clanwars;
            }),
            this.editEntityTemplateService.entityChanges.skip(1).subscribe(item => {
                this.onSelect(item)
            })
        );
		
		this.route.params.forEach((params: Params) => {
			let id = +params['id']; // (+) converts string 'id' to a number
			 
            if (id) {
                this.subs.push(
                    this.clanwarsService.getOnId(id).subscribe(clanwar => {
                        if (clanwar) {
                            this.editEntityTemplateService.entityChanges.next(clanwar);
                        }
                    })
                );
            } else {
                this.subs.push(
                    this.clanwarsService.getAll().subscribe(clanwars => {
                        if (clanwars) {
                            this.editEntityTemplateService.entityChanges.next(this.clanwars[0]);
                        }
                    })
                );
            }
		});
	}
	
	ngOnDestroy() {
		this.subs.forEach((sub) => {
			sub.unsubscribe();
		})
	}
}
