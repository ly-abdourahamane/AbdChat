import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[compMouseLiveColor]'
})
export class MouseLiveColorDirective {

  private _defaultColor = 'white';
  @Input('compMouseLiveColor') hightlightColor: string;

  constructor(private _elementRef: ElementRef, private _renderer2: Renderer2) {
    this._renderer2.setStyle(this._elementRef.nativeElement, 'background-color', this._defaultColor);
  }

  /**
   * fonction executée lorsque le pointeur de la souris est sur l'élément
   */
  @HostListener('mouseenter') onMouseEnter() {
    this._renderer2.setStyle(this._elementRef.nativeElement, 'background-color', this.hightlightColor);
  }

  /**
   * fonction executée lorsque le pointeur de la souris quitte l'élément
   */
  @HostListener('mouseleave') onMouseLeave() {
    this._renderer2.setStyle(this._elementRef.nativeElement, 'background-color', this._defaultColor);
  }
}
