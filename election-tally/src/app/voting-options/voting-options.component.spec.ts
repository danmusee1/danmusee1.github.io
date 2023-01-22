import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingOptionsComponent } from './voting-options.component';

describe('VotingOptionsComponent', () => {
  let component: VotingOptionsComponent;
  let fixture: ComponentFixture<VotingOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotingOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotingOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
