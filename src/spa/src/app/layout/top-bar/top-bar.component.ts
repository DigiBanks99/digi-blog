import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'db-top-bar-view',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent {}

@NgModule({
  declarations: [TopBarComponent],
  imports: [],
  exports: [TopBarComponent]
})
export class TopBarComponentModule {}
