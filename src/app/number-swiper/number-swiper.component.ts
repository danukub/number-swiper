import { Component, ElementRef, HostBinding, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'number-swiper',
  templateUrl: './number-swiper.component.html',
  styleUrls: ['./number-swiper.component.css']
})
export class NumberSwiperComponent {

  @HostBinding('class.green') isVisibleInView = false;

  private observer!: IntersectionObserver;

  constructor(private li: ElementRef) {


  }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver( entries => {
      if ( entries[0].isIntersecting === true ) {
        this.isVisibleInView = true;

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
      threshold: 0.75
    });

    this.observer.observe(this.li.nativeElement as HTMLElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }



}
