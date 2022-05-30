import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule
} from '@angular/core';
import { PostSummary } from '../../post.interface';

@Component({
  selector: 'db-post-summary',
  templateUrl: './post-summary.component.html',
  styleUrls: ['./post-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostSummaryComponent {
  @Input() public post: PostSummary | undefined;
}

@NgModule({
  declarations: [PostSummaryComponent],
  imports: [],
  exports: [PostSummaryComponent]
})
export class PostSummaryComponentModule {}
