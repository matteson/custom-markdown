import { Component, Input, ViewEncapsulation } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: '[block]',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
/** Renders a markdown text into an angular view */
export class BlockComponent {
  constructor(
    private dataService: DataService
  ) {}

  @Input('block') node: any;

  // AOT safe children from the node
  get children() {
    return 'children' in this.node ? this.node.children : [];
  }

  get_custom() {
    return this.dataService.get_selected_data().custom;
  }
}
