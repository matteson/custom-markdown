import {Component, OnInit, Input, Inject} from '@angular/core';
import {FrozenProcessor} from "unified";

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent {

  processed: any = '';

  @Input()
  set raw(markdown: string) {
    this.processed = this.unified.parse(markdown);
  }

  constructor(
    @Inject('unified') private unified: FrozenProcessor
  ) { }

}
