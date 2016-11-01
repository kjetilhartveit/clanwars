import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import * as _ from 'lodash';

import { globals } from '../core/globals';
import { Match } from './match';

@Component({
	selector: globals.directiveSelector + 'matches-form-field',
  templateUrl: './matches-form-field.component.html',
  styleUrls: ['./matches-form-field.component.scss']
})
export class MatchesFormFieldComponent implements OnInit {
	@Input() matches: Match[];
	@Input() matchesFormArray: FormArray;
	
  constructor() { }

	ngOnInit() {
  }
	
	onChangeMatch(match: Match) {
	}
}
