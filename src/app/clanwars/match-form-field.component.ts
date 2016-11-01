import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms'; 

import { globals } from '../core/globals';
import { MatchSide } from './match-side';
import { Match } from './match';

@Component({
  selector: globals.directiveSelector + 'match-form-field',
  templateUrl: './match-form-field.component.html',
  styleUrls: ['./match-form-field.component.scss']
})
export class MatchFormFieldComponent implements OnInit {
	@Input() match: Match;
	@Input() matchesFormArray: FormArray;
	@Output() changeMatch = new EventEmitter<Match>();

	matchFormGroup: FormGroup;
	
  constructor() { }

	ngOnInit() {
		this.matchFormGroup = new FormGroup({});

		this.matchesFormArray.controls.push(this.matchFormGroup);
  }
	
	onChangeMatchSide(side: number, matchSide: MatchSide) {
		//if (side === 1) {
		//	this.match.side1 = matchSide; 
		//} else {
		//	this.match.side2 = matchSide; 
		//}
		
		this.changeMatch.next(this.match);
	}
}
