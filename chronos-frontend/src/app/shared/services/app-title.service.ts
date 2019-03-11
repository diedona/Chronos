import { Title } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Event, NavigationEnd, ActivatedRoute } from '@angular/router';

/*
  https://ultimatecourses.com/blog/dynamic-page-titles-angular-2-router-events
*/

@Injectable({
  providedIn: 'root'
})
export class AppTitleService {

  readonly defaultTitle = 'Chronos Time Tracker';
  subRouterEvents: Subscription;

  constructor(
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
  ) { }

  startWatch(events: Observable<Event>): void {
    this.subRouterEvents = events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route: ActivatedRoute) => {
        while (route.firstChild) {
          //console.log('look:', route);
          route = route.firstChild;
        }
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route: ActivatedRoute) => route.data)
    ).subscribe((data) => {
      let title = this.defaultTitle;

      if (data.title) {
        title = data.title;
      }

      if (data.subtitle) {
        title += data.subtitle;
      }

      //console.log('this >>>', data);
      this.titleService.setTitle(title);
    });
  }

  stopWatch() {
    if (this.subRouterEvents) {
      this.subRouterEvents.unsubscribe();
    }
  }

}
