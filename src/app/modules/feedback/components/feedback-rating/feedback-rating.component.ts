import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-feedback-rating',
  templateUrl: './feedback-rating.component.html',
  styleUrls: ['./feedback-rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FeedbackRatingComponent),
      multi: true,
    },
  ],
})
export class FeedbackRatingComponent implements OnInit, ControlValueAccessor {
  @Input() content: string = 'title';
  @Input() disabled: boolean = false;

  options: number[] = [1, 2, 3, 4, 5];
  value: number | null = null;

  changed: (value: number) => void = () => {};
  touched: () => void = () => {};

  constructor() {}
  writeValue(value: number): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.changed = fn;
  }

  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  ngOnInit(): void {}

  valueUpdated(value: number) {
    if (this.disabled) {
      return;
    }

    this.value = value;

    this.changed(value);
    this.touched();
  }
}
