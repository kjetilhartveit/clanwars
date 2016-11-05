import { Injectable }    from '@angular/core';

import { Clan } from './clan';
import { CLANS } from './mock-clans';
import { Cache } from '../shared/cache';
import { BaseService } from '../shared/base.service';
//import { Player, PlayersService } from '../players';
 
@Injectable()
export class ClansService extends BaseService<Clan> {
    getMockData() {
        return CLANS;
    }
}