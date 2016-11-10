import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
 
@Injectable()
export class FormHelperService {
	getValueAndResetState<T>(control: AbstractControl): T {
		let value = control.value as T;
		
		// Reset field
		control.markAsUntouched();
		control.markAsPristine();
		
		return value;
	}
}