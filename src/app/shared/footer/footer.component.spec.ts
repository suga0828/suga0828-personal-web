import { NgModule } from '@angular/core';
import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';

import { MockModule } from 'ng-mocks';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FooterComponent } from './footer.component';

@NgModule({
  imports: [MatToolbarModule, FontAwesomeModule],
})
class MockedDependenciesModule {}

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FooterComponent],
        imports: [MockModule(MockedDependenciesModule)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
