import { Directive, ElementRef, Output, EventEmitter, HostListener, Renderer } from '@angular/core';

import { DragDropStrings as Strings } from './';

@Directive({
	selector: '[droppable]'
})
export class DroppableDirective {
	@Output() dropped: EventEmitter<any> = new EventEmitter();

    constructor(private element: ElementRef,
                private renderer: Renderer) { }

	/**
	 * Dragging element over this element
	 */
	@HostListener(Strings.Event.DragEnter)
	onDragEnter() {
		this.setElementClass(Strings.OverClass, true);
	}

	/**
	 * Leaving this element with dragged element
	 */
	@HostListener(Strings.Event.DragLeave)
	onDragLeave() {
		this.setElementClass(Strings.OverClass, false);
	}

	/**
	 * Effect to apply when over this element
	 */
	@HostListener(Strings.Event.DragOver, ['$event'])
	onDragOver(event: DragEvent): boolean {
        event.dataTransfer.dropEffect = Strings.EffectMove;

		return false;
	}

	/**
	 * Drop of element on this element
	 */
	@HostListener(Strings.Event.Drop, ['$event'])
	onDrop(event: DragEvent): boolean {
		let data: string = JSON.parse(event.dataTransfer.getData(Strings.DataTypeText));
		
		// stop some browsers from redirecting.
		event.stopPropagation();

		// remove class
		this.setElementClass(Strings.OverClass, false);

		// emit event to parent with data
        this.dropped.emit(data);

		return false;
	}

	/**
	 * Set style on element
	 */
	private setElementClass(styleName: string, active: boolean) {
		this.renderer.setElementClass(this.element.nativeElement, styleName, active);
	}

}