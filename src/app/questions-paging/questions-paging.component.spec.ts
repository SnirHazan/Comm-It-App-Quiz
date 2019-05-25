import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsPagingComponent } from './questions-paging.component';

describe('QuestionsPagingComponent', () => {
  let component: QuestionsPagingComponent;
  let fixture: ComponentFixture<QuestionsPagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsPagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsPagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
