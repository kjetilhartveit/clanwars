import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryToFlagPathPipe } from './country-to-flag-path.pipe';
import { CountriesService }	from './countries.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
	    CountryToFlagPathPipe
    ],
    exports: [
	    CountryToFlagPathPipe
    ],
    providers: [
	    { provide: CountriesService, useClass: CountriesService }
    ]
})
export class CountriesModule { }
