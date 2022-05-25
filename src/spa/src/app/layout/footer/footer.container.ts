import { Component, NgModule } from '@angular/core';
import { FooterComponentModule } from './footer.component';

@Component({
  selector: 'db-footer',
  template: `<db-footer-view></db-footer-view>`
})
export class FooterContainer {}

@NgModule({
  declarations: [FooterContainer],
  imports: [FooterComponentModule],
  exports: [FooterContainer]
})
export class FooterContainerModule {}
