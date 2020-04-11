import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  links = [
    { title: "About me", path: "/about", internalLink: true },
    { title: "Projects", path: "/prjects", internalLink: true },
    { title: "Contact", path: "mailto:alexander.sf0828@gmail.com", internalLink: false },
  ]

  @Output() public sidenavToggle = new EventEmitter();

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
