import { Component, NgModule } from '@angular/core';
import { TopBarComponentModule } from './top-bar.component';

@Component({
  selector: 'db-top-bar',
  template: `<db-top-bar-view></db-top-bar-view>`
})
export class TopBarContainer {}

@NgModule({
  declarations: [TopBarContainer],
  imports: [TopBarComponentModule],
  exports: [TopBarContainer]
})
export class TopBarContainerModule {}
