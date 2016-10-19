import { Injectable }    from '@angular/core';

@Injectable()
/**
 * - Should we read from a config file?
 * - readonly properties not supported in TypeScript <2.0 so using methods
 */
export class ConfigService {
//  constructor(private http:Http) {}
	
	/**
	 * FIXME fix hardcoding. Paths are supposed to work out of the box. At very least move this to an external config file
	 */
	getWebRoot(): string {
		return '/';
	}
	
	/**
	 * App path relative to the web root.
	 * 
	 */
	getAppPath(): string {
		return 'app';
	}
	
	/**
	 * Directive selector prefix. Changing this value requires changing all 
	 * directive selectors in the project.
	 * 
	 * Default: cw-
	 */
	getDirectiveSelectorPrefix(): string {
		return 'cw-';
	}

//  load() { // <------
//    return new Promise((resolve) => {
//      this.http.get('appconfig.json').map(res=>res.json())
//        .subscribe(config => {
////          this.config = config;
//          resolve();
//				})
//		)}
//	}
}