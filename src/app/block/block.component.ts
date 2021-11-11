import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[block]',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
/** Renders a markdown text into an angular view */
export class BlockComponent {
  constructor() {}

  @Input('block') node: any;

  // AOT safe children from the node
  get children() {
    return 'children' in this.node ? this.node.children : [];
  }
}
