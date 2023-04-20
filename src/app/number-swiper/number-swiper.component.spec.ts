import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberSwiperComponent } from './number-swiper.component';

describe('NumberSwiperComponent', () => {
  let component: NumberSwiperComponent;
  let fixture: ComponentFixture<NumberSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberSwiperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
