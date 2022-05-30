import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostSummaryComponent } from './post-summary.component';

describe('PostSummaryComponent', () => {
  let component: PostSummaryComponent;
  let fixture: ComponentFixture<PostSummaryComponent>;
  const loremIpsum =
    'Dolor sea euismod hendrerit dolore tempor ea et sed eros labore in invidunt consetetur sanctus amet sadipscing labore. Duo kasd luptatum tempor esse nulla erat tincidunt lorem justo. Euismod ipsum sed stet diam lorem lorem ipsum dolore erat justo in clita kasd sit labore ullamcorper molestie illum. Duis takimata lorem eirmod nisl amet est sadipscing magna doming aliquyam magna vel. Ut magna clita iusto sit sanctus eos ad magna voluptua ea eos erat elitr accusam magna in sed. Justo kasd blandit volutpat sed sed amet consetetur amet volutpat vulputate in esse lorem. Voluptua ea eos et et diam dolor est voluptua erat facilisi elit justo autem invidunt sadipscing. Nonumy gubergren diam sed. Feugiat accusam illum est augue invidunt amet sed nam. Sit accusam lorem et nobis et sea. Blandit kasd iriure nonumy dolor facilisis tempor delenit sea invidunt invidunt.';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostSummaryComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSummaryComponent);
    component = fixture.componentInstance;
    component.post = {
      title: 'Test title',
      author: {
        id: '77',
        firstName: 'Ben',
        lastName: 'Parker'
      },
      date: new Date(),
      id: 'test-id',
      summary: loremIpsum,
      tags: ['tag1', 'tag2']
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the post title', () => {
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('header > h4');
    expect(title.textContent).toEqual('Test title');
  });

  it('should have the author in the subtitle', () => {
    fixture.detectChanges();
    const author = fixture.nativeElement.querySelector('header > p');
    expect(author.textContent).toEqual('Ben Parker');
  });

  it('should have a summary in the article', () => {
    fixture.detectChanges();
    const summary = fixture.nativeElement.querySelector('article > p');
    expect(summary.textContent.trim()).toEqual(loremIpsum);
  });
});
