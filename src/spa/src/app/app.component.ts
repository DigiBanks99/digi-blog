import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import {
  BodyComponentModule,
  FooterContainerModule,
  TopBarContainerModule
} from './layout';

@Component({
  selector: 'db-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .layout {
        height: 100%;
        max-height: 100vh;
        display: grid;
        grid-template-columns: 4fr;
        grid-template-rows: 0.2fr 2.7fr 0.1fr;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas:
          'header'
          'body'
          'footer';
      }

      db-body {
        grid-area: body;
        overflow: auto;
      }

      db-top-bar {
        grid-area: header;
      }

      db-footer {
        grid-area: footer;
      }
    `
  ]
})
export class AppComponent {}

@NgModule({
  declarations: [AppComponent],
  imports: [BodyComponentModule, FooterContainerModule, TopBarContainerModule],
  exports: [AppComponent]
})
export class AppComponentModule {}
