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
  blocks?: string[];

  inputValue: number = 0;

  range(start: number, end: number): string[] {
    return Array.from(Array(end - start + 1).keys()).map(x => (x + start).toString().padStart(2, '0'));
  }

  ngOnInit() {
    this.blocks = this.range(this.min, this.max);
  }

  setValue(): void {
    this.window?.nativeElement.children[this.inputValue].scrollIntoView();
  }

}
