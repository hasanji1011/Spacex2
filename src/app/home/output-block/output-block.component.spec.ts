import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputBlockComponent } from './output-block.component';

describe('OutputBlockComponent', () => {
  let component: OutputBlockComponent;
  let fixture: ComponentFixture<OutputBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
