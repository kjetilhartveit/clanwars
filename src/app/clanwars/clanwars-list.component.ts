import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { globals, Subscription, SubscriptionsManager, HasSubscriptionsNg } from '../core/';
import { Clanwar } from './';
import { ClanwarsService } from './clanwars.service';
import { EditEntityTemplateService } from '../shared/edit-entity-template/edit-entity-template.service';

@Component({
	selector: globals.directiveSelector + 'clanwars-list',
	templateUrl: './clanwars-list.component.html',
	styleUrls: ['./clanwars-list.component.scss'],
	providers: [EditEntityTemplateService]
})
export class ClanwarsListComponent implements HasSubscriptionsNg, OnInit, OnDestroy {
	clanwars: Clanwar[] = [];
    selectedClanwar: Clanwar;
    subs = new SubscriptionsManager();
	
	constructor(private route: ActivatedRoute,
				private router: Router, 
				private clanwarsService: ClanwarsService,
				private editEntityTemplateService: EditEntityTemplateService<Clanwar>) {
	}

    ngOnInit() {
        let getAllClanwarsSub = this.clanwarsService.getAll().subscribe(clanwars => {
            this.clanwars = clanwars;
        });

        let entityChangesSub = this.editEntityTemplateService.entityChanges.skip(1).subscribe(item => {
            this.onSelect(item)
        });
		
		let paramsSub = this.route.params.subscribe((params: Params) => {
			let id = +params['id']; // (+) converts string 'id' to a number
			 
            if (id) {
                // Select entity found on ID
                this.subs.add(
                    this.clanwarsService.getOnId(id).subscribe(clanwar => {
                        if (clanwar) {
                            this.editEntityTemplateService.entityChanges.next(clanwar);
                        }
                    })
                );
            } else {
                // Select first entity from list
                this.subs.add(
                    this.clanwarsService.getAll().subscribe(clanwars => {
                        if (clanwars) {
                            this.editEntityTemplateService.entityChanges.next(clanwars[0]);
                        }
                    })
                );
            }
        });

        this.subs.add(getAllClanwarsSub, entityChangesSub, paramsSub);
	}
	
	ngOnDestroy() {
        this.subs.unsubscribe();
    }

    onSelect(clanwar: Clanwar) {
        this.router.navigate(['/clanwars', clanwar.id]);
        this.selectedClanwar = clanwar;
    }
}
