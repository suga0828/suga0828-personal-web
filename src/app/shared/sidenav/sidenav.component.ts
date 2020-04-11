import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  @ViewChild('sidenav') sidenav;

  links = [
    { title: 'About me', path: '/about', internalLink: true },
    { title: 'Projects', path: '/prjects', internalLink: true },
    { title: 'Contact', path: 'mailto:alexander.sf0828@gmail.com', internalLink: false },
  ];

  onSidenavClose = () => {
    this.sidenav.toggle();
  }
}
