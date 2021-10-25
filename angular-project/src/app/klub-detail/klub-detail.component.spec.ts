import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlubDetailComponent } from './klub-detail.component';

describe('KlubDetailComponent', () => {
  let component: KlubDetailComponent;
  let fixture: ComponentFixture<KlubDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlubDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlubDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
