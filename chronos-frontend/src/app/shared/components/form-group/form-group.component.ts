import { Subscription } from 'rxjs';
import { Component, OnInit, AfterContentInit, ContentChild, OnDestroy, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { ErrorHintComponent } from '../error-hint/error-hint.component';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {

  @ContentChild(ErrorHintComponent) errorHint: ErrorHintComponent;
  showError: boolean = false;
  subscription: Subscription;

  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }

  ngAfterContentInit(): void {
    if (this.errorHint) {
      this.subscription = this.errorHint.emitterErrorState.subscribe((isOnError: boolean) => {
        
        //console.log('chamado', Date.now());
        if (this.showError != isOnError) {
          this.showError = isOnError;
          // https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4
          this.cd.detectChanges();
        }
        
      });
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
