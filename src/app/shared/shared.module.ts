import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitterSquare, faGithubSquare, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faBars, faHeart } from '@fortawesome/free-solid-svg-icons';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';

// Add an icon to the library for convenient access in other components
library.add(faTwitterSquare, faGithubSquare, faLinkedin, faMedium, faEnvelopeSquare, faBars, faHeart);

@NgModule({
	imports: [CommonModule, FontAwesomeModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, FlexLayoutModule ],
	declarations: [HeaderComponent, FooterComponent, SidenavListComponent],
	exports:  [HeaderComponent, FooterComponent, SidenavListComponent, FontAwesomeModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, FlexLayoutModule ]
})

export class SharedModule { }
