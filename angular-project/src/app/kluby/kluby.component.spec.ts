import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlubyComponent } from './kluby.component';

describe('KlubyComponent', () => {
  let component: KlubyComponent;
  let fixture: ComponentFixture<KlubyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlubyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlubyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
