import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitterSquare, faGithubSquare, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';

// Add an icon to the library for convenient access in other components
library.add(faTwitterSquare, faGithubSquare, faLinkedin, faMedium, faEnvelopeSquare);

@NgModule({
	imports: [CommonModule, FontAwesomeModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule],
	declarations: [HeaderComponent, FooterComponent, SidenavListComponent],
	exports:  [HeaderComponent, FooterComponent]
})

export class SharedModule { }
