import {
  Directive,
  ViewContainerRef,
  OnInit,
  Input,
  ComponentRef,
} from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[widgetContainer]',
})
export class WidgetComponentDirective implements OnInit {
  @Input('widgetContainer') widget: ComponentRef<any>;
  constructor(public viewContainer: ViewContainerRef) {}

  ngOnInit(): void {
    this.viewContainer.clear();
    this.viewContainer.insert(this.widget.hostView);
  }
}
