import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

interface Feedback {
  rating: number;
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  url = 'http://localhost:3000/feedback';

  constructor(private http: HttpClient) {}

  sendFeedback(feedback: Feedback) {
    this.http.post(this.url, feedback);

    // Not a real API, so return an observable with a fake response
    return of(feedback);
  }
}
