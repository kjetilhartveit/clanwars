import { Pipe, PipeTransform } from '@angular/core';

import { Country }	from './country';
import { WebHelperService }	from '../web/web-helper.service';

@Pipe({name: 'countryToFlagPath'})
export class CountryToFlagPathPipe implements PipeTransform {
	
	constructor(private webHelperService: WebHelperService) {}
	
  transform(country: Country): string {
		return this.webHelperService.buildAssetsPath('/flags/' + country.flagFilename);
  }
}