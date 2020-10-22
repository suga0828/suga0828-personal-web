import { Component, HostListener, Inject, ViewChild, ViewEncapsulation } from '@angular/core';

import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  desktopQuery: MediaQueryList;

  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(@Inject(MediaMatcher) media: MediaMatcher) {
    this.desktopQuery = media.matchMedia('(min-width: 600px)');
  }

  @HostListener('window:resize', [])
  private onResize(): void {
    if (this.sidenav.opened && this.desktopQuery.matches) {
      this.sidenav.close();
    }
  }
}
