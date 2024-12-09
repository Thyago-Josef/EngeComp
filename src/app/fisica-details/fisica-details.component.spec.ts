import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FisicaDetailsComponent } from './fisica-details.component';

describe('FisicaDetailsComponent', () => {
  let component: FisicaDetailsComponent;
  let fixture: ComponentFixture<FisicaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FisicaDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FisicaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
