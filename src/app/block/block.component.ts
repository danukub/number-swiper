import { Component, ElementRef, HostBinding } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent {

  @HostBinding('class.green') isVisibleInView = false;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {

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
      threshold: 1
    });

    this.observer.observe(this.el.nativeElement as HTMLElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

}