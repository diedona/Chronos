import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-error-hint',
  templateUrl: './error-hint.component.html',
  styleUrls: ['./error-hint.component.scss']
})
export class ErrorHintComponent implements OnInit {

  @Input() refForm: NgForm;
  @Input() refFormControl: FormControl;
  @Output() emitterErrorState: EventEmitter<boolean> = new EventEmitter();

  constructor(

  ) { }

  ngOnInit() {
    //console.log(this.refFormControl);
  }

  errorState(): boolean {
    const isInError =
      (
        this.refFormControl.invalid &&
        (this.refFormControl.dirty || this.refFormControl.touched || this.refForm.submitted)
      );

    this.emitterErrorState.emit(isInError);
    return isInError;
  }

}
