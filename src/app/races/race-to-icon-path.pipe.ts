import { Pipe, PipeTransform } from '@angular/core';

import { Race }	from './';
import { WebHelperService }	from '../web';

@Pipe({name: 'raceToIconPath'})
export class RaceToIconPathPipe implements PipeTransform {
	
	constructor(private webHelperService: WebHelperService) {}
	
  transform(race: Race): string {
		return this.webHelperService.buildAssetsPath('/race-icons/' + race.iconFilename);
  }
}