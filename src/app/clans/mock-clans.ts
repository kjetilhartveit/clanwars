import { ReflectiveInjector } from '@angular/core';

import { Clan } from './clan'; 
import { CountriesService } from '../countries/countries.service'; 

let injector = ReflectiveInjector.resolveAndCreate([CountriesService]);
let countriesService: CountriesService = injector.get(CountriesService);

export const CLANS: Clan[] = [
    { id: 1, name: 'Four Kings', shortname: '4K', country: countriesService.getOnIdSync('uk') },
	{ id: 2, name: 'Meet Your Makers', shortname: 'MYM', country: countriesService.getOnIdSync('dk') },
	{ id: 3, name: 'SK Gaming', shortname: 'SK', country: countriesService.getOnIdSync('de') },
	{ id: 4, name: 'World Elite', shortname: 'WE', country: countriesService.getOnIdSync('cn') }
];