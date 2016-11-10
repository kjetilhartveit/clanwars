import { Injectable } from '@angular/core';

import { BaseService } from '../core/';
import { Country } from './';
import { COUNTRIES } from './mock-countries';
 
@Injectable()
export class CountriesService extends BaseService<Country> {
    getMockData() {
        return COUNTRIES;
    }
}