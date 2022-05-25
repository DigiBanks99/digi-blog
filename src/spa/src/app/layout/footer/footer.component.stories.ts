import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { FooterComponent, FooterComponentModule } from './footer.component';

export default <Meta>{
  title: 'Layout/Footer',
  component: FooterComponent,
  decorators: [
    moduleMetadata({
      imports: [FooterComponentModule]
    })
  ]
};

export const Primary: Story = () => ({});
