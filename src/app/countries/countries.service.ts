import { Injectable }    from '@angular/core';

import { Country } from './country';
import { COUNTRIES } from './mock-countries';
import { Cache } from '../shared/cache';
 
@Injectable()
export class CountriesService {
	
	private _cache = new Cache<Country[]>();
	
	/**
	 * TODO Make async, Promise<Country[]>
	 */
	getCountries(): Country[] {
		if (!this._cache.hasCache()) {
			this._cache.add(COUNTRIES);
		}
		
		return this._cache.get();
	}
	
	getOnAlpha2Code(alpha2code: string): Country {
		return this.getCountries().find(c => c.alpha2code === alpha2code);	
	}
}