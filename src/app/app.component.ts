import {Component, OnInit} from '@angular/core';
import {DataService} from "./data.service";
import {DocumentService} from "./document.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'markdown-demo';

  data: {custom: string}[] = [];
  documents: string[] = [];

  selected_data
  selected_document = 0;

  constructor(
    private dataService: DataService,
    private documentService: DocumentService,
  ) {
  }

  ngOnInit() {
    this.selected_data = this.dataService.selected_data;

    this.data = this.dataService.get_data();
    this.documents = this.documentService.get_documents();
  }

  set_data() {
    this.dataService.set_selected(this.selected_data);
  }

  get_data() {
    return this.dataService.get_selected_data();
  }
}
