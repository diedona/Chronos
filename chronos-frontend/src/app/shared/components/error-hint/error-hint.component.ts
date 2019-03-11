import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Form } from '@angular/forms';

@Component({
  selector: 'app-error-hint',
  templateUrl: './error-hint.component.html',
  styleUrls: ['./error-hint.component.scss']
})
export class ErrorHintComponent implements OnInit {

  @Input() refForm: Form;
  @Input() refFormControl: FormControl;

  constructor() { }

  ngOnInit() {
    //console.log(this.refFormControl);
  }

}
