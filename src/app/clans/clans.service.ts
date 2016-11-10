import { Injectable }    from '@angular/core';

import { BaseService } from '../core/';
import { Clan } from './';
import { CLANS } from './mock-clans';

@Injectable()
export class ClansService extends BaseService<Clan> {
    getMockData() {
        return CLANS;
    }
}