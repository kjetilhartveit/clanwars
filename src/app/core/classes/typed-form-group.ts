import {
    AbstractControl, FormGroup, FormControl, FormArray, FormBuilder,
    Validators, ValidatorFn, AsyncValidatorFn
} from '@angular/forms';

/**
 * Typed form group base class
 */
export abstract class TypedFormGroup<T> extends FormGroup {
    readonly original: T;
    
    constructor(entity: T,
                controls: { [key: string]: AbstractControl; },
                validator?: ValidatorFn,
                asyncValidator?: AsyncValidatorFn) {

        super(controls, validator, asyncValidator);

        this.original = entity;
    }

    /**
     * Creates model from form
     */
    abstract toModel(): T;
}
