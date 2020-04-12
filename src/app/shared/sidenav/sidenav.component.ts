import { Component } from '@angular/core';
import { LINKS } from '../constants/links.constants';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  links = LINKS;
}
