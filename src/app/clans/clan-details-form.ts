import { AbstractControl, FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

import { Utility, TypedFormGroup } from '../core/';
import { Clan } from './';

export class ClanDetailsForm extends TypedFormGroup<Clan> {
    get name(): AbstractControl {
        return this.controls['name'];
    }

    get shortname(): AbstractControl {
        return this.controls['shortname'];
    }

    get country(): AbstractControl {
        return this.controls['country'];
    }

    constructor(clan: Clan) {
        super(clan, {
            name: new FormControl(clan.name, [Validators.required]),
            shortname: new FormControl(clan.shortname, [Validators.required]),
            country: new FormControl(clan.country, [Validators.required])
        });
    }

    /**
     * Creates model from form
     */
    toModel(): Clan {
        // Make copy of original to make sure we don't override it
        let model = Utility.shallowCopy<Clan>(this.original);

        model.name = this.name.value;
        model.shortname = this.shortname.value;
        model.country = this.country.value;

        return model;
    }
}
