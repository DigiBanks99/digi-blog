import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'db-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BodyComponent {}

@NgModule({
  declarations: [BodyComponent],
  imports: [RouterModule],
  exports: [BodyComponent]
})
export class BodyComponentModule {}
