import { FormArray, FormGroup, FormControl } from '@angular/forms';

import { MatchSide, SinglesMatchSide, DoublesMatchSide, Match } from './';

export class MatchesFormArray extends FormArray {
	matches: Match[];

	constructor(matches: Match[]) {
		let matchControls = new Array<FormGroup>();

        // Build matches form array
		matches.forEach(match => {
			let side1 = this.buildMatchSideGroup(match.side1);
			let side2 = this.buildMatchSideGroup(match.side2);

            // One form group per match
			let matchFormGroup = new FormGroup({
				side1: side1,
				side2: side2
			});

			matchControls.push(matchFormGroup);
		});

		super(matchControls);

		this.matches = matches;
	}

    /**
     * Builds controls for match side form group
     */
	private buildMatchSideGroup(matchSide: MatchSide): FormGroup {
		let matchSideFormGroup = new FormGroup({
			score: new FormControl(matchSide.score)
		});

        if ('player' in matchSide) {
            // Singles match side
			let singlesMatchSide = <SinglesMatchSide>matchSide;

            matchSideFormGroup.addControl('player', new FormControl(singlesMatchSide.player));
        } else if ('player1' in matchSide) {
            // Doubles match side
			let doublesMatchSide = <DoublesMatchSide>matchSide;

			matchSideFormGroup.addControl('player1', new FormControl(doublesMatchSide.player1));
			matchSideFormGroup.addControl('player2', new FormControl(doublesMatchSide.player2));
		}

		return matchSideFormGroup;
	}
}