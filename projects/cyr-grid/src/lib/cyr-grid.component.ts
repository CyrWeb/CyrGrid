import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { ColDef } from 'ag-grid-community';
import {
  AgGridAngular,
  AngularFrameworkComponentWrapper,
  AngularFrameworkOverrides,
} from 'ag-grid-angular';

@Component({
  selector: 'lib-cyr-grid',
  template: ``,
  providers: [AngularFrameworkOverrides, AngularFrameworkComponentWrapper],
  // tell angular we don't want view encapsulation, we don't want a shadow root
  encapsulation: ViewEncapsulation.None,
})
export class CyrGridComponent<
  TData = any,
  TColDef extends ColDef<TData> = ColDef<any>
> extends AgGridAngular<TData, TColDef> {
  constructor(
    elementDef: ElementRef,
    viewContainerRef: ViewContainerRef,
    angularFrameworkOverrides: AngularFrameworkOverrides,
    frameworkComponentWrapper: AngularFrameworkComponentWrapper,
    componentFactoryResolver: ComponentFactoryResolver
  ) {
    super(
      elementDef,
      viewContainerRef,
      angularFrameworkOverrides,
      frameworkComponentWrapper,
      componentFactoryResolver
    );
  }
}
