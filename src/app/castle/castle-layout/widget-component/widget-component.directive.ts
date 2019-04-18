import { Directive, ComponentFactoryResolver, ViewContainerRef, Renderer2, OnInit, Input, Type } from '@angular/core';

@Directive({
// tslint:disable-next-line: directive-selector
  selector: '[widgetContainer]'
})
export class WidgetComponentDirective implements OnInit {

  @Input('widgetContainer') component: Type<any>;
  constructor(
    private cfResolver: ComponentFactoryResolver,
    public viewContainer: ViewContainerRef
    ) {}

    ngOnInit(): void {
      this.viewContainer.clear();
      const factory = this.cfResolver.resolveComponentFactory(this.component);
      const componentRef = this.viewContainer.createComponent(factory);
    }

}
