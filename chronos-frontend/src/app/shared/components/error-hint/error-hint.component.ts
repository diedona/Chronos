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
  latestErrorState: boolean;

  constructor(

  ) { }

  ngOnInit() {
    //console.log(this.refFormControl);
  }

  errorState(): boolean {
    const currentErrorState =
      (
        this.refFormControl.invalid &&
        (this.refFormControl.dirty || this.refFormControl.touched || this.refForm.submitted)
      );

    // SE HOUVER MUDANÇA DO ESTADO, ATUALIZAR E EMITIR EVENTO
    if (this.latestErrorState != currentErrorState) {
      this.latestErrorState = currentErrorState;
      this.emitterErrorState.emit(currentErrorState);
    }

    return currentErrorState;
  }

}
