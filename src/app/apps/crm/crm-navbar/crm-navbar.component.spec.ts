import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmNavbarComponent } from './crm-navbar.component';

describe('CrmNavbarComponent', () => {
  let component: CrmNavbarComponent;
  let fixture: ComponentFixture<CrmNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
