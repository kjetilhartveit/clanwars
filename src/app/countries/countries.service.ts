import { Injectable }    from '@angular/core';

import { Country } from './country';
import { COUNTRIES } from './mock-countries';
import { Cache } from '../shared/cache';
import { BaseService } from '../shared/base.service';
 
@Injectable()
export class CountriesService extends BaseService<Country> {
    getMockData() {
        return COUNTRIES;
    }
}