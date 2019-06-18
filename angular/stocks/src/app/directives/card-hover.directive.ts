import { Directive, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective implements OnInit {

  card: any;

  constructor(private el: ElementRef) {
    console.log('CardHoverDirective');
   }

  ngOnInit() {
    this.card = this.el.nativeElement.querySelector('.mdl-card');
    if (this.card.classList.contains('increase')) {
      this.card.style.backgroundColor = 'rgb(63,81,181)';
    } else if (this.card.classList.contains('decrease')) {
      this.card.style.backgroundColor = 'rgb(255,171,64)';
    } else {
      this.card.style.backgroundColor = '';
    }
  }

  @HostListener('mouseover') onMouseOver() {
    //console.log('CardHoverDirective--mouseover');
    this.card.style.boxShadow = '2px 2px 1px #999';
    this.card.style.top = '-10px';
  }
  @HostListener('mouseout') onMouseOut() {
    //console.log('CardHoverDirective--mouseout');
    this.card.style.boxShadow = '';
    this.card.style.top = '';
  }

}
