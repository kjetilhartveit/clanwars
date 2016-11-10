import { Injectable }    from '@angular/core';

import { BaseService } from '../core/';
import { Clanwar } from './';
import { CLANWARS } from './mock-clanwars';
 
@Injectable()
export class ClanwarsService extends BaseService<Clanwar> {
    getMockData() {
        return CLANWARS;
    }
}