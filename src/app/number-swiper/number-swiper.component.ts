import { Component } from '@angular/core';

@Component({
  selector: 'number-swiper',
  templateUrl: './number-swiper.component.html',
  styleUrls: ['./number-swiper.component.css']
})
export class NumberSwiperComponent {
  
  min: number = 0;
  max: number = 99;
  length: number = this.max + 1 - this.min;
  value?: number;
  
  blocks = Array(this.length).fill(null).map((x, index) => (index + this.min).toString().padStart(2, '0'));
}
