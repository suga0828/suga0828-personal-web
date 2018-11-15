import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitterSquare, faGithubSquare, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

// Add an icon to the library for convenient access in other components
library.add(faTwitterSquare, faGithubSquare, faLinkedin, faMedium, faEnvelopeSquare);

@NgModule({
	imports: [CommonModule, FontAwesomeModule],
	declarations: [HeaderComponent, FooterComponent],
	exports:  [HeaderComponent, FooterComponent]
})

export class SharedModule { }
