import { Pipe, PipeTransform } from '@angular/core';

import { Country }	from './';
import { WebHelperService }	from '../web';

@Pipe({name: 'countryToFlagPath'})
export class CountryToFlagPathPipe implements PipeTransform {
	
	constructor(private webHelperService: WebHelperService) {}
	
  transform(country: Country): string {
		return this.webHelperService.buildAssetsPath('/flags/' + country.flagFilename);
  }
}