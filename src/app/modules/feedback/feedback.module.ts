import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackPageComponent } from './pages/feedback-page/feedback-page.component';
import { FeedbackRatingComponent } from './components/feedback-rating/feedback-rating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [FeedbackPageComponent, FeedbackRatingComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ComponentsModule],
})
export class FeedbackModule {}
