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
import { FlexLayoutModule } from '@angular/flex-layout';

// Add an icon to the library for convenient access in other components
library.add(faTwitterSquare, faGithubSquare, faLinkedin, faMedium, faEnvelopeSquare);

@NgModule({
	imports: [CommonModule, FontAwesomeModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, FlexLayoutModule ],
	declarations: [HeaderComponent, FooterComponent, SidenavListComponent],
	exports:  [HeaderComponent, FooterComponent, SidenavListComponent, FontAwesomeModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, FlexLayoutModule ]
})

export class SharedModule { }
