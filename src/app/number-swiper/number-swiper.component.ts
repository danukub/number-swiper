import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'number-swiper',
  templateUrl: './number-swiper.component.html',
  styleUrls: ['./number-swiper.component.css']
})
export class NumberSwiperComponent {

  @ViewChild('window') window: ElementRef<HTMLElement> | undefined;

  min: number = 0;
  max: number = 99;
  length: number = this.max + 1 - this.min;
  value?: number;
  blocks: any;

  inputValue: number = 0;


  ngOnInit() {
    this.blocks = Array(this.length).fill(null).map((x, index) => (index + this.min).toString().padStart(2, '0'));
    console.log(this.blocks[4])
  }

  setValue(): void {
    this.window?.nativeElement.children[this.inputValue].scrollIntoView();
  }

}
