import { RouterTestingModule } from '@angular/router/testing';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { BodyComponent, BodyComponentModule } from './body.component';

export default <Meta>{
  title: 'Layout/Body',
  component: BodyComponent,
  decorators: [
    moduleMetadata({
      imports: [BodyComponentModule, RouterTestingModule]
    })
  ]
};

export const Primary: Story = () => ({});
