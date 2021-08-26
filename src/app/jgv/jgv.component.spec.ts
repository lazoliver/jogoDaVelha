import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JgvComponent } from './jgv.component';

describe('JgvComponent', () => {
  let component: JgvComponent;
  let fixture: ComponentFixture<JgvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JgvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JgvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
