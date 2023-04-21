import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'number-swiper';

 blocks = Array(99).fill(null).map((x, i) => i + 1);

  el:HTMLElement;
  value?: number;
  constructor( el: ElementRef) { this.el = el.nativeElement
  }

  printValue() {
    let a = this.el.getElementsByClassName("green");
    a.item(0);


    this.value = Number(a.item(0)?.textContent);

    console.log(a.item(0)?.textContent);  
  }

}
