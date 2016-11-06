import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { globals, Subscription, SubscriptionsManager, HasSubscriptionsNg } from '../core/';
import { Clan } from './clan';
import { ClansService } from './clans.service';
import { EditEntityTemplateService } from '../shared/edit-entity-template/edit-entity-template.service';

@Component({
	selector: globals.directiveSelector + 'clans-list',
	templateUrl: './clans-list.component.html',
	styleUrls: ['./clans-list.component.scss'],
	providers: [EditEntityTemplateService]
})
export class ClansListComponent implements HasSubscriptionsNg, OnInit {
	clans: Clan[] = [];
	selectedClan: Clan;
	subs = new SubscriptionsManager();
	
	constructor(private route: ActivatedRoute,
				private router: Router, 
				private clansService: ClansService,
                private editEntityTemplateService: EditEntityTemplateService<Clan>) {
    }
	
    ngOnInit() {
        this.subs.add(
            this.clansService.getAll().subscribe(clans => {
                this.clans = clans;
            }),
            this.editEntityTemplateService.entityChanges.skip(1).subscribe((item) => {
                this.onSelectClan(item);
            })
        );
		
		this.route.params.forEach((params: Params) => {
			let id = +params['id']; // (+) converts string 'id' to a number

            if (id) {
                this.subs.add(
                    this.clansService.getOnId(id).subscribe(clan => {
                        if (clan) {
                            this.editEntityTemplateService.entityChanges.next(clan);
                        }
                    })
                );
            } else {
                this.subs.add(
                    this.clansService.getAll().subscribe(clans => {
                        if (clans) {
                            this.editEntityTemplateService.entityChanges.next(this.clans[0]);
                        }
                    })
                );
            }
		});	
  }
	
	ngOnDestroy() {
        this.subs.unsubscribe();
    }

    onSelectClan(clan: Clan) {
        this.router.navigate(['/clans', clan.id]);
        this.selectedClan = clan;
    }
}