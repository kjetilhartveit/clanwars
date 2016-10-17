import { Injectable }    from '@angular/core';
 
import { PathsService } from '../shared';

@Injectable()
export class WebHelperService {
	
	constructor(private pathsService: PathsService) {}
	
	buildAssetsPath(path: string): string {
		return this.pathsService.getAssetsPath() + path;
	}
}