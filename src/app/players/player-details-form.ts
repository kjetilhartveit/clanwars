import { AbstractControl, FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

import { Utility, TypedFormGroup } from '../core/';
import { Player } from './';

export class PlayerDetailsForm extends TypedFormGroup<Player> {
    get nickname(): AbstractControl {
        return this.controls['nickname'];
    }

    get firstname(): AbstractControl {
        return this.controls['firstname'];
    }

    get lastname(): AbstractControl {
        return this.controls['lastname'];
    }

    get country(): AbstractControl {
        return this.controls['country'];
    }

    get race(): AbstractControl {
        return this.controls['race'];
    }

    get clan(): AbstractControl {
        return this.controls['clan'];
    }

    constructor(player: Player) {
        super(player, {
            nickname: new FormControl(player.nickname, [Validators.required]),
            firstname: new FormControl(player.firstname, [Validators.required]),
            lastname: new FormControl(player.lastname, [Validators.required]),
            country: new FormControl(player.country, [Validators.required]),
            race: new FormControl(player.race, [Validators.required]),
            clan: new FormControl(player.clan, [Validators.required])
        });
    }

    /**
     * Creates model from form
     */
    toModel(): Player {
        let player = Utility.shallowCopy<Player>(this.original);

        player.nickname = this.nickname.value;
        player.firstname = this.firstname.value;
        player.lastname = this.lastname.value;
        player.country = this.country.value;
        player.race = this.race.value;
        player.clan = this.clan.value;

        return player;
    }
}
