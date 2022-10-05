import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackPageComponent } from './pages/feedback-page/feedback-page.component';
import { FeedbackRatingComponent } from './components/feedback-rating/feedback-rating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FeedbackPageComponent, FeedbackRatingComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class FeedbackModule {}
