import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTwitter, faGithub, faLinkedinIn, faMediumM } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faBars, faHeart, faAdjust } from '@fortawesome/free-solid-svg-icons';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  declarations: [HeaderComponent, FooterComponent, SidenavComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    FontAwesomeModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faTwitter, faGithub, faLinkedinIn, faMediumM, faEnvelope, faBars, faHeart, faAdjust);
  }
}
