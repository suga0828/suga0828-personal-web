import { Component, ViewEncapsulation } from '@angular/core';
import { LINKS } from '../constants/links.constants';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidenavComponent {
  links = LINKS;
}
