import { AppTitleService } from './shared/services/app-title.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(
    private appTitleService: AppTitleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const events = this.router.events;
    this.appTitleService.startWatch(events);
  }

  ngOnDestroy(): void {
    this.appTitleService.stopWatch();
  }

}
