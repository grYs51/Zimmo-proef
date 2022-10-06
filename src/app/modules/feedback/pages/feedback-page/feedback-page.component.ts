import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { FeedbackService } from 'src/app/modules/feedback/services/feedback.service';

@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.scss'],
})
export class FeedbackPageComponent implements OnInit {
  feedbackForm!: FormGroup;
  errorText: string | undefined;
  formSubmitted: boolean = false;
  constructor(private feedbackService: FeedbackService) {}

  get hasRating() {
    return this.feedbackForm.get('rating')?.value > 0;
  }

  ngOnInit(): void {
    this.feedbackForm = new FormGroup({
      rating: new FormControl(0),
      text: new FormControl('', [Validators.required]),
    });
  }

  ratingChanged(_value: number) {
    console.log(_value);
  }

  onSubmit() {
    if (!this.feedbackForm.valid) {
      this.errorText = 'Dit mag niet leeg zijn!';
      return;
    }

    firstValueFrom(this.feedbackService.sendFeedback(this.feedbackForm.value))
      .then(() => {
        this.formSubmitted = true;
      })
      .catch(() => {
        this.errorText = 'Er ging iets mis, probeer het later nog eens.';
      });
  }
}
