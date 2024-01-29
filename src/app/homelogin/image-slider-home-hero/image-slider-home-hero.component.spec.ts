import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSliderHomeHeroComponent } from './image-slider-home-hero.component';

describe('ImageSliderHomeHeroComponent', () => {
  let component: ImageSliderHomeHeroComponent;
  let fixture: ComponentFixture<ImageSliderHomeHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageSliderHomeHeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageSliderHomeHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
