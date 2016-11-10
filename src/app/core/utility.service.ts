import { Injectable } from '@angular/core';
 
@Injectable()
export class UtilityService {

	/**
	 * Shorthand method to manually resolve a service via dependency injection. Uses ReflectiveInjector.
	 * 
	 * Use it like this:
	 * let myService: MyService = UtilityService.ResolveService<MyService>(MyService)
	 * 
	 * TODO When used have to define the injectable twice, once in type argument and once as a parameter
	 * TODO How do we pass a type definition instead of "any" as the parameter type?
	 * 
	 * @see https://angular.io/docs/ts/latest/api/core/index/ReflectiveInjector-class.html#!#resolveAndCreate-anchor
	 */
//	static ResolveService<T extends Service>(service: any): T {
//		let providers: any[] = [service];
//		let injector = ReflectiveInjector.resolveAndCreate(providers);  
//		
//		return injector.get(service);
//	}
	
}