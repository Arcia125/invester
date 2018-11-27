import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Observable, merge, of } from 'rxjs';

type BreakpointStatePredicate = (result: BreakpointState) => boolean;
const resultMatches: BreakpointStatePredicate = result => result.matches;
const invert = (value: boolean) => !value;

type BreakpointStateToBoolean = (observable: Observable<BreakpointState>) => Observable<boolean>;

const getResultMatches: BreakpointStateToBoolean = observable => {
  return observable.pipe(
    filter(resultMatches),
    map(resultMatches)
  );
};

const getNotResultMatches: BreakpointStateToBoolean = observable => {
  return observable.pipe(
    filter(resultMatches),
    map(resultMatches),
    map(invert)
  );
};

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {
  public breakpoints = {
    desktop: '(min-width: 700px)',
    notDesktop: '(max-width: 700px)'
  };
  public isDesktop$: Observable<boolean>;
  constructor(public breakpointObserver: BreakpointObserver) {
    this.isDesktop$ = merge(
      of(false),
      getResultMatches(breakpointObserver.observe([
        this.breakpoints.desktop
      ])),
      getNotResultMatches(breakpointObserver.observe([
        this.breakpoints.notDesktop
      ]))
    );
  }

}
