import { Component, HostListener, AfterViewInit, OnDestroy } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { distinctUntilChanged, map, pairwise, takeUntil, throttleTime } from 'rxjs/operators';
import { animate, state, style, transition, trigger } from '@angular/animations';

export enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden'
}

export enum Direction {
  None = 'None',
  Up = 'Up',
  Down = 'Down'
}

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state(VisibilityState.Visible, style({
        transform: 'translateY(0)'
      })),
      state(VisibilityState.Hidden, style({
        transform: 'translateY(-64px)' // adjust this to the height of your header
      })),
      transition(`${VisibilityState.Visible} => ${VisibilityState.Hidden}`, animate('250ms')),
      transition(`${VisibilityState.Hidden} => ${VisibilityState.Visible}`, animate('250ms'))
    ])
  ]
})

export class NavMenuComponent implements AfterViewInit, OnDestroy {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  private destroy$: Subject<boolean> = new Subject<boolean>();
  isHeader1Visible = VisibilityState.Visible;
  isHeader2Visible = VisibilityState.Hidden;
  slideHeader2InAtPosition = 30;

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngAfterViewInit() {
    // create an observable stream of scroll positions and map them to UP / DOWN directions
    const content = document.querySelector('.scrollWrapper');
    const scroll$ = fromEvent(content, 'scroll').pipe( // if the scroll events happen on your window you could use 'window' instead of 'content' here
      throttleTime(10),
      map(() => content.scrollTop), // if you used 'window' above replace 'content.scrollTop' with 'window.pageYOffset'
      pairwise(),
      map(([y1, y2]): Direction => {
        // console.log(y1, y2);
        return (y2 < y1 ? Direction.Up : (y2 > this.slideHeader2InAtPosition ? Direction.Down : Direction.None));
      }),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    );

    // subscribe to the UP / DOWN scroll direction stream and set the header state accordingly
    scroll$.subscribe(dir => {
      if (dir === Direction.Down) {
        console.log('scrolling down', content.scrollTop);
        this.isHeader1Visible = VisibilityState.Hidden;
        this.isHeader2Visible = VisibilityState.Visible;
      } else {
        console.log('scrolling up', content.scrollTop);
        this.isHeader1Visible = VisibilityState.Visible;
        this.isHeader2Visible = VisibilityState.Hidden;
      }
    });
  }
}
