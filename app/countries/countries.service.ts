import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Service } from '../shared';
import { Country, COUNTRIES } from './';
 
@Injectable()
export class CountriesService {
	
	/**
	 * TODO Make async, Promise<Country[]>
	 */
	getCountries(): Country[] {
		return COUNTRIES;
	}
	
	getOnAlpha2Code(alpha2code: string): Country {
		return this.getCountries().find(c => c.alpha2code === alpha2code);	
	}
}