import { NgModule } from '@angular/core';
import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';

import { MockModule } from 'ng-mocks';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AboutComponent } from './about.component';

@NgModule({
  imports: [MatSidenavModule],
})
class MockedDependenciesModule {}

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AboutComponent],
        imports: [MockModule(MockedDependenciesModule)],
      }).compileComponents();

      fixture = TestBed.createComponent(AboutComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
