import { ReflectiveInjector } from '@angular/core';

import { Clan } from './'; 
import { CountriesService } from '../countries'; 

// TODO Can we do this more elegantly?
let injector = ReflectiveInjector.resolveAndCreate([CountriesService]);
let countriesService: CountriesService = injector.get(CountriesService);

//  id: number;
//  name: string;
//  shortName: string;
//  country: Country;
export const CLANS: Clan[] = [
	{ id: 1, name: 'Four Kings', shortname: '4K', country: countriesService.getOnAlpha2Code('uk') },
	{ id: 2, name: 'Meet Your Makers', shortname: 'MYM', country: countriesService.getOnAlpha2Code('dk') },
	{ id: 3, name: 'SK Gaming', shortname: 'SK', country: countriesService.getOnAlpha2Code('de') },
	{ id: 4, name: 'World Elite', shortname: 'WE', country: countriesService.getOnAlpha2Code('cn') }
];