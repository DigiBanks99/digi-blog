import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TopBarComponent, TopBarComponentModule } from './top-bar.component';

export default <Meta>{
  title: 'Layout/Top Bar',
  component: TopBarComponent,
  decorators: [
    moduleMetadata({
      imports: [TopBarComponentModule]
    })
  ]
};

export const Primary: Story = () => ({});
