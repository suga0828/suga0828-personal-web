import { Component, ViewEncapsulation } from '@angular/core';
import { WEB_PAGE, EMAIL } from '../constants/contact.constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent {

  webPage = WEB_PAGE;

  socialNetworks = [
    { path: 'https://github.com/suga0828', icon: ['fab', 'github'] },
    { path: 'https://twitter.com/suga0828_', icon: ['fab', 'twitter'] },
    { path: 'https://medium.com/@suga0828', icon: ['fab', 'medium-m'] },
    { path: 'https://www.linkedin.com/in/suga0828/', icon: ['fab', 'linkedin-in'] },
    { path: `mailto:${EMAIL}`, icon: ['fas', 'envelope'] }
  ];

}
