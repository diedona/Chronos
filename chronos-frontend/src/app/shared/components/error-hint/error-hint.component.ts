import { Component, OnInit, Input } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-error-hint',
  templateUrl: './error-hint.component.html',
  styleUrls: ['./error-hint.component.scss']
})
export class ErrorHintComponent implements OnInit {

  @Input() refForm: NgForm;
  @Input() refFormControl: FormControl;

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

    return isInError;
  }

}
