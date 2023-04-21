import { Component } from '@angular/core';

@Component({
  selector: 'number-swiper',
  templateUrl: './number-swiper.component.html',
  styleUrls: ['./number-swiper.component.css']
})
export class NumberSwiperComponent {
  blocks = Array(99).fill(null).map((x, i) => i + 1);

  value?: number;
}
