import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {

  show = false;
  subscription: Subscription;

  constructor(
    private loadingService: LoaderService
  ) { }

  ngOnInit() {
    this.subscription = this.loadingService.loadingState.subscribe(state => {
      this.show = state
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
