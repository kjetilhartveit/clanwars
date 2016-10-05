import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
 
import { ConfigService } from './';

@Injectable()
export class PathsService {
	
	constructor(private configService: ConfigService) {}
	
	getAssetsPath(): string {
		return this.configService.getAppPath() + '/shared/assets';
	}
}