import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  socialNetworks = [
    { path: "https://github.com/suga0828", icon: ['fab', 'github'] },
    { path: "https://twitter.com/suga0828_", icon: ['fab', 'twitter'] },
    { path: "https://medium.com/@suga0828", icon: ['fab', 'medium-m'] },
    { path: "https://www.linkedin.com/in/suga0828/", icon: ['fab', 'linkedin-in'] },
    { path: "mailto:alexander.sf0828@gmail.com", icon: ['fas', 'envelope'] }
  ];

}
