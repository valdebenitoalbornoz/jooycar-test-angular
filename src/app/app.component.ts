import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, filter } from 'rxjs/operators';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

// TODO: Add to config file
const DEFAULT_SPLASH_TIME = 2000;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  activeSplash: boolean = false;
  routeChangeSubscription$?: Subscription;
  background = true;
  constructor(
    private _router: Router,
    private _authService: AuthService,
  ) {
  }
  
  ngOnInit(): void {
    this.routeChangeSubscription$ = this._router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
      )
      .subscribe((e : any) => {
        // No pass background when we are on dashboard page. // FIXME: Get better!
        this.showSplash(!e.url.startsWith('/dashboard'))
      });

    this._authService.isLogged$
    .pipe(
      distinctUntilChanged()
    )
    .subscribe(logged => {
      this._router.navigate(logged ? [ 'dashboard/home' ] : [ 'login' ])
    });
  }
  
  ngOnDestroy(): void {
    if (this.routeChangeSubscription$) {
      this.routeChangeSubscription$.unsubscribe();
    }
  }

  showSplash(background: boolean) {
    this.activeSplash = true;
    this.background = background;
    setTimeout(() => this.activeSplash = false, DEFAULT_SPLASH_TIME);
  }

}
