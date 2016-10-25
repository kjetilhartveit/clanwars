import { Component, Input, OnInit } from '@angular/core';

import { globals } from '../core/globals';
import { Match } from './match';

@Component({
  selector: globals.directiveSelector + 'match-as-form-fields',
  templateUrl: './match-as-form-fields.component.html',
  styleUrls: ['./match-as-form-fields.component.scss']
})
export class MatchAsFormFieldsComponent implements OnInit {

	@Input()
	match: Match;

  constructor() { }

  ngOnInit() {
  }

}
