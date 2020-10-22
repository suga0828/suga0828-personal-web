import { NgModule } from '@angular/core';
import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BreakpointObserver } from '@angular/cdk/layout';
import { of } from 'rxjs';

import { HeaderComponent } from './header.component';

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, FontAwesomeModule],
})
class MockedDependenciesModule {}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HeaderComponent],
        imports: [RouterTestingModule, MockModule(MockedDependenciesModule)],
        providers: [
          {
            provide: BreakpointObserver,
            useValue: {
              observe: () =>
                of({
                  matches: false,
                  breakpoints: {
                    key: true,
                  },
                }),
            },
          },
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
