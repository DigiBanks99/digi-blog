import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'db-footer-view',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {}

@NgModule({
  declarations: [FooterComponent],
  imports: [],
  exports: [FooterComponent]
})
export class FooterComponentModule {}
