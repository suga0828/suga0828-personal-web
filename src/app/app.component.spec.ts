import { NgModule } from '@angular/core';
import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { AboutComponent } from './about/about.component';
import { MockModule } from 'ng-mocks';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [SidenavComponent, HeaderComponent, FooterComponent],
  imports: [MatSidenavModule],
})
class MockedDependenciesModule {}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent, AboutComponent],
        imports: [
          RouterTestingModule.withRoutes([{ path: '', component: AboutComponent }]),
          MockModule(MockedDependenciesModule),
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
