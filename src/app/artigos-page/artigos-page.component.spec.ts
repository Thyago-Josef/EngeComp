import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigosPageComponent } from './artigos-page.component';

describe('ArtigosPageComponent', () => {
  let component: ArtigosPageComponent;
  let fixture: ComponentFixture<ArtigosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtigosPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtigosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
