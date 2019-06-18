import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appClassType]'
})
export class CardTypeDirective implements OnInit {
  @Input() appClassType = 0;
  @Input() increaseClass = 'increase';
  @Input() decreaseClass = 'decrease';

  constructor(private el: ElementRef) { }

  ngOnInit() {
    console.log('appCardType =>');
    if (this.appClassType) {
      if (this.appClassType >= 0) {
        this.el.nativeElement.classList.add(this.increaseClass);
        this.el.nativeElement.classList.remove(this.decreaseClass);
      } else if (this.appClassType <= 0) {
        this.el.nativeElement.classList.add(this.decreaseClass);
        this.el.nativeElement.classList.remove(this.increaseClass);
      } else {
        this.el.nativeElement.classList.remove(this.increaseClass);
        this.el.nativeElement.classList.remove(this.decreaseClass);
      }
    }
  }
}
