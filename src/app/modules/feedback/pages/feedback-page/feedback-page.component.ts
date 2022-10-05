import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.scss'],
})
export class FeedbackPageComponent implements OnInit {
  feedbackForm!: FormGroup;
  errorText: string | undefined = 'Dit mag niet leeg zijn!';
  constructor() {}

  get hasRating() {
    return this.feedbackForm.get('rating')?.value > 0;
  }

  ngOnInit(): void {
    this.feedbackForm = new FormGroup({
      //TODO: has to change back to 0
      rating: new FormControl(1),
      text: new FormControl('', [Validators.required]),
    });
  }

  ratingChanged(_value: number) {
    console.log(this.feedbackForm);
  }
}
