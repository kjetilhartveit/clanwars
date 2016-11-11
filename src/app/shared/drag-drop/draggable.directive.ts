import { Directive, Input, ElementRef, HostListener, Renderer } from '@angular/core';

import { DragDropStrings as Strings } from './';

@Directive({
	selector: '[draggable]'
})
export class DraggableDirective {
	@Input('draggable') data: any; // input-data from attribute

    constructor(private element: ElementRef,
                private renderer: Renderer) { }

	/**
	 * Set element draggable (for browser)
	 */
	ngOnInit() {
		this.renderer.setElementProperty(this.element.nativeElement, Strings.Draggable, true);
	}

	/**
	 * Drag start of element
	 */
	@HostListener(Strings.Event.DragStart, ['$event'])
	onDragStart(event: DragEvent): boolean {
		// add class
		this.setElementClass(Strings.DragClass, true);

		// set data
		event.dataTransfer.effectAllowed = Strings.EffectMove;
		event.dataTransfer.setData(Strings.DataTypeText, JSON.stringify(this.data));

		return true;
	}

	/**
	 * End of drag event (final event in drag-drop operation)
	 */
	@HostListener(Strings.Event.DragEnd, ['$event'])
	onDragEnd(event: DragEvent): boolean {
		// remove class
		this.setElementClass(Strings.DragClass, false);

		return false;
	}

	/**
	 * Set style on element
	 */
	private setElementClass(styleName: string, active: boolean) {
		this.renderer.setElementClass(this.element.nativeElement, styleName, active);
	}
}
