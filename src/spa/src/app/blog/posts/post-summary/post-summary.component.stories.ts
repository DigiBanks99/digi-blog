import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { PostSummary } from '../../post.interface';
import {
  PostSummaryComponent,
  PostSummaryComponentModule
} from './post-summary.component';

export default <Meta>{
  title: 'Post/Summary',
  component: PostSummaryComponent,
  decorators: [
    moduleMetadata({
      imports: [PostSummaryComponentModule]
    })
  ]
};

export const Primary: StoryFn<PostSummaryComponent> = () => ({
  props: {
    post: <PostSummary>{
      id: 'bc46f44c-9b4e-400f-be3e-c967a7f20b6a',
      author: {
        id: '9715718b-cf92-4881-9208-ee26e303bcdf',
        firstName: 'Ben',
        lastName: 'Parker'
      },
      date: new Date('2022-05-27'),
      summary:
        "A short summary that is supposed to give a little context on the post. I'm intentionally making it longer to see if we correctly trim when overflowing the bounds of the summary post card.",
      title: 'The post title',
      tags: ['tag1', 'tag2', 'tag3']
    }
  }
});
