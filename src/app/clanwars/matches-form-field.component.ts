import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import * as _ from 'lodash';

import { globals } from '../core/globals';
import { Match } from './match';

@Component({
	selector: globals.directiveSelector + 'matches-form-field',
  templateUrl: './matches-form-field.component.html',
  styleUrls: ['./matches-form-field.component.scss'],
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => MatchesFormFieldComponent),
		multi: true
	}]
})
export class MatchesFormFieldComponent implements OnInit, ControlValueAccessor {
	@Input()
	matches: Match[];
	
	formMatches: Match[];
	
  constructor() { }

  ngOnInit() {
		this.formMatches = Array.from(this.matches);
		console.log(this.matches);
//		this.formMatches = Object.assign({}, this.matches);
		
		console.log(this.formMatches);
		console.log(this.matches === this.formMatches);
  }
	
	onChangeMatch(match: Match) {
		this.onChangeCallback(this.formMatches);
//			this.onTouched();
	}
	
	//The internal data model
//	private innerValue: any = '';
//
	//Placeholders for the callbacks which are later providesd
	//by the Control Value Accessor
	private onChangeCallback: (_: any) => {};
	private onTouchedCallback: () => {};

	//get accessor
//	get value(): any {
//			return this.innerValue;
//	};
//
//	//set accessor including call the onchange callback
//	set value(v: any) {
//			if (v !== this.innerValue) {
//					this.innerValue = v;
//					this.onChangeCallback(v);
//			}
//	}

	//Set touched on blur
//	onBlur() {
//			this.onTouchedCallback();
//	}

	//From ControlValueAccessor interface
	writeValue(value: any) {
		this.matches = value;
	}

	//From ControlValueAccessor interface
	registerOnChange(fn: any) {
			this.onChangeCallback = fn;
	}

	//From ControlValueAccessor interface
	registerOnTouched(fn: any) {
			this.onTouchedCallback = fn;
	}
}
