import { Directive, ElementRef, AfterViewInit } from '@angular/core';

/**
 * Explicitly select the option with the selected attribute
 */
@Directive({
    selector: 'select[setInitialSelectedOption]'
})
export class SetInitialSelectedOptionDirective implements AfterViewInit {
    constructor(private elementRef: ElementRef) { }

	ngAfterViewInit() {
		let select = this.elementRef.nativeElement as HTMLSelectElement;

		let selectedIndex: number | null = null;
		let len = select.options.length;

		for (let i=0; i<len; i++) {
			let item = select.options.item(i);

			if (item.hasAttribute('selected') && item.getAttribute('selected') == 'true') {
				selectedIndex = i;
			}
		}

		if (selectedIndex !== null) {
			select.selectedIndex = selectedIndex;
		}
	}
}
