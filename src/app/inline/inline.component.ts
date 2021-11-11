import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[inline]',
  templateUrl: './inline.component.html',
  styleUrls: ['./inline.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InlineComponent {
  constructor() {}

  @Input('inline') node: any;

  // AOT safe children from the node
  get children() {
    return 'children' in this.node ? this.node.children : [];
  }

  public text_helper(value: string): string {
    return value || '';
  }
}
