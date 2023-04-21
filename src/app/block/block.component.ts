import { Component, ElementRef, HostBinding, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { NumberSwiperComponent } from '../number-swiper/number-swiper.component';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent {

  @HostBinding('class.green') isVisibleInView = false;

  private observer!: IntersectionObserver;

  constructor(public el: ElementRef, private app: NumberSwiperComponent) {
  }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(entries => {

      // console.log(entries);



      if ( entries[0].isIntersecting === true ) {
        // console.log(this.el.nativeElement.innerText);
        this.isVisibleInView = true;

        this.app.value = this.el.nativeElement.innerText;

        // Probably needs to be called in production
        //
        // this.observer.disconnect();
      } else {
        // Probably not interesting in production
        // but used for demo purposes
        //
        this.isVisibleInView = false;
      }
    }, {
      threshold: 1
    });

    this.observer.observe(this.el.nativeElement as HTMLElement);
  }


  ngOnDestroy() {
    this.observer.disconnect();
  }

}