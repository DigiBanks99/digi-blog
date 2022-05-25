import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { BodyComponent, BodyComponentModule } from './body.component';

export default <Meta>{
  title: 'Layout/Body',
  component: BodyComponent,
  decorators: [
    moduleMetadata({
      imports: [BodyComponentModule]
    })
  ]
};

export const Primary: Story = () => ({});
