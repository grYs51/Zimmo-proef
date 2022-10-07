import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentsModule } from 'src/app/components/components.module';

import { FeedbackRatingComponent } from './feedback-rating.component';

describe('FeedbackRatingComponent', () => {
  let component: FeedbackRatingComponent;
  let fixture: ComponentFixture<FeedbackRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbackRatingComponent],
      imports: [ComponentsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedbackRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
