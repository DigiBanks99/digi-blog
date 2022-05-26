import { RouterTestingModule } from '@angular/router/testing';
import { Meta, Story } from '@storybook/angular';
import { AppComponent, AppComponentModule } from './app.component';

export default <Meta>{
  component: AppComponent,
  imports: [AppComponentModule, RouterTestingModule]
};

export const Primary: Story = () => ({});
