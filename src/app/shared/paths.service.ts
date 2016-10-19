import { Injectable }    from '@angular/core';

@Injectable()
export class PathsService {
	
//	constructor(private configService: ConfigService) {}
	
	getAssetsPath(): string {
		// TODO should we fix this hardcoding of assets path?
		return '/assets';
	}
}