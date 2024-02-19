import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseSourceComponent } from './choose-source.component';

describe('ChooseSourceComponent', () => {
  let component: ChooseSourceComponent;
  let fixture: ComponentFixture<ChooseSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseSourceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
