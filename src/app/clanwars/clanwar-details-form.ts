import { AbstractControl, FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

import { Utility, TypedFormGroup } from '../core/'; 
import { MatchesFormArray, Clanwar } from './';

export class ClanwarDetailsForm extends TypedFormGroup<Clanwar> {
    get clan1(): AbstractControl {
        return this.controls['clan1'];
    }

    get clan2(): AbstractControl {
        return this.controls['clan2'];
    }

    get matches(): AbstractControl {
        return this.controls['matches'];
    }

    constructor(clanwar: Clanwar) {
        super(clanwar, {
            clan1: new FormControl(clanwar.clan1, [Validators.required]),
            clan2: new FormControl(clanwar.clan2, [Validators.required]),
            matches: new MatchesFormArray(clanwar.matches)
        });
    }

    /**
     * Creates model from form
     */
    toModel(): Clanwar {
        let clanwar = Utility.shallowCopy<Clanwar>(this.original);

        clanwar.clan1 = this.clan1.value;
        clanwar.clan2 = this.clan2.value;
        clanwar.matches = this.matches.value;

        return clanwar;
    }
}
