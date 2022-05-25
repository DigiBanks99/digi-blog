import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { BodyComponentModule } from './layout/body/body.component';
import { FooterContainerModule } from './layout/footer/footer.container';
import { TopBarContainerModule } from './layout/top-bar/top-bar.container';

@Component({
  selector: 'db-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}

@NgModule({
  declarations: [AppComponent],
  imports: [BodyComponentModule, FooterContainerModule, TopBarContainerModule],
  exports: [AppComponent]
})
export class AppComponentModule {}
