import { Injectable }    from '@angular/core';

import { BaseService } from '../core/';
import { Race } from './race';
import { RACES } from './mock-races';
 
@Injectable()
export class RacesService extends BaseService<Race> {
    getMockData() {
        return RACES;
    }
}