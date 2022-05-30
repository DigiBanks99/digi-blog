import { RouterTestingModule } from '@angular/router/testing';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AppComponent, AppComponentModule } from './app.component';

export default <Meta>{
  component: AppComponent,
  decorators: [
    moduleMetadata({
      imports: [AppComponentModule, RouterTestingModule]
    })
  ]
};

export const Primary: Story = () => ({});
