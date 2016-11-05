import { Injectable }    from '@angular/core';

import { Race } from './race';
import { RACES } from './mock-races';
import { Cache } from '../shared/cache';
import { BaseService } from '../shared/base.service';
 
@Injectable()
export class RacesService extends BaseService<Race> {
    getMockData() {
        return RACES;
    }
}