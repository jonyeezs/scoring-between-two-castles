import { Directive, ElementRef, Renderer2, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appDynamicHeight]'
})
export class DynamicHeightDirective implements OnChanges {
  @Input('appDynamicHeight') height: number;
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.height && changes.height.currentValue) {
      this.renderer.setStyle(this.el.nativeElement, 'min-height',
      `${(this.height || 1) * 3.2}rem`);
    }
  }

}
