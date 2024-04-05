import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneFetchComponent } from './one-fetch.component';

describe('OneFetchComponent', () => {
  let component: OneFetchComponent;
  let fixture: ComponentFixture<OneFetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneFetchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OneFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
