import { Component, Output, EventEmitter, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakpointState, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { LINKS } from '../constants/links.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  theme = 'dark-theme'
  links = LINKS;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  @Output() public sidenavToggle = new EventEmitter();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private breakpointObserver: BreakpointObserver,
    private renderer: Renderer2
  ) {}

  changeTheme(theme: string) {
    if (this.theme === 'dark-theme') {
      this.theme = 'light-theme';
      this.renderer.addClass(this.document.body, 'my-light-theme');
    } else {
      this.theme = 'dark-theme';
      this.renderer.removeClass(this.document.body, 'my-light-theme');
    }
  }
}
