import { NgModule } from '@angular/core';
import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { AboutComponent } from 'src/app/about/about.component';
import { MockModule } from 'ng-mocks';
import { MatListModule } from '@angular/material/list';

import { SidenavComponent } from './sidenav.component';

@NgModule({
  imports: [MatListModule],
})
class MockedDependenciesModule {}

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SidenavComponent, AboutComponent],
        imports: [
          RouterTestingModule.withRoutes([{ path: '', component: AboutComponent }]),
          MockModule(MockedDependenciesModule),
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
