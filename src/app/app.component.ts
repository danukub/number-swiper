import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'number-swiper';

  blocks = Array(20).fill(null).map((x, i) => i + 1);


}
