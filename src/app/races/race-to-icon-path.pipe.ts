import { Pipe, PipeTransform } from '@angular/core';

import { Race }	from './race';
import { WebHelperService }	from '../web/web-helper.service';

@Pipe({name: 'raceToIconPath'})
export class RaceToIconPathPipe implements PipeTransform {
	
	constructor(private webHelperService: WebHelperService) {}
	
  transform(race: Race): string {
		return this.webHelperService.buildAssetsPath('/race-icons/' + race.iconFilename);
  }
}