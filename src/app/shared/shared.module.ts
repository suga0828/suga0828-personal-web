import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faGithub, faLinkedinIn, faMediumM } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faBars, faHeart } from '@fortawesome/free-solid-svg-icons';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavComponent } from './sidenav/sidenav.component';

// Add an icon to the library for convenient access in other components
library.add(faTwitter, faGithub, faLinkedinIn, faMediumM, faEnvelope, faBars, faHeart);

@NgModule({
	imports: [CommonModule, FontAwesomeModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule ],
	declarations: [HeaderComponent, FooterComponent, SidenavComponent],
	exports:  [HeaderComponent, FooterComponent, SidenavComponent, FontAwesomeModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule ]
})

export class SharedModule { }
