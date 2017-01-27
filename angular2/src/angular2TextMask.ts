import {Directive, ElementRef, forwardRef, Input, NgModule, OnInit, AfterViewInit, Renderer} from '@angular/core'
import {CommonModule} from '@angular/common'
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms'
import createTextMaskInputElement from '../../core/src/createTextMaskInputElement'

@Directive({
  host: {
    '(input)': 'onInput($event)',
    '(blur)': '_onTouched()'
  },
  selector: '[textMask]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MaskedInputDirective),
    multi: true
  }]
})
export class MaskedInputDirective implements OnInit, AfterViewInit, ControlValueAccessor{
  private textMaskInputElement: any
  private inputElement:HTMLInputElement

  @Input('textMask')
  textMaskConfig = {
    mask: '',
    guide: true,
    placeholderChar: '_',
    pipe: undefined,
    keepCharPositions: false,
    onReject: undefined,
    onAccept: undefined
  }

  private _onTouched = () => {}
  private _onChange = (_: any) => {}

  private isInit: boolean = false

  constructor(private renderer: Renderer, private element: ElementRef) {}

  ngAfterViewInit() {
    !this.isInit && this.setupMask()
  }

  ngOnInit() {
    this.setupMask()
  }

  private setupMask() {
    if (this.element.nativeElement.tagName === 'INPUT') {
      // `textMask` directive is used directly on an input element
      this.inputElement = this.element.nativeElement
    } else {
      // `textMask` directive is used on an abstracted input element, `ion-input`, `md-input`, etc
      this.inputElement = this.element.nativeElement.getElementsByTagName('INPUT')[0]
    }

    if (this.inputElement) {
      this.textMaskInputElement = createTextMaskInputElement(
          Object.assign({inputElement: this.inputElement}, this.textMaskConfig)
      )
      this.isInit = true
    }
  }

  writeValue(value: any) {
    if (this.textMaskInputElement !== undefined) {
      this.textMaskInputElement.update(value)
    }
  }

  registerOnChange(fn: (value: any) => any): void { this._onChange = fn }

  registerOnTouched(fn: () => any): void { this._onTouched = fn }

  onInput($event) {
    this.textMaskInputElement.update($event.target.value)
    this._onChange($event.target.value)
  }

  setDisabledState(isDisabled: boolean) {
    this.renderer.setElementProperty(this.element.nativeElement, 'disabled', isDisabled)
  }
}

@NgModule({
  declarations: [MaskedInputDirective],
  exports: [MaskedInputDirective],
  imports: [CommonModule]
})
export class TextMaskModule {
}
