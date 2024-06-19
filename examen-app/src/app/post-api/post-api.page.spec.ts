import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostApiPage } from './post-api.page';

describe('PostApiPage', () => {
  let component: PostApiPage;
  let fixture: ComponentFixture<PostApiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostApiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
