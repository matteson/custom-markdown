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

  selected_data = 0;
  selected_document = 0;

  constructor(
    private dataService: DataService,
    private documentService: DocumentService
  ) {
  }

  ngOnInit() {
    this.data = this.dataService.get_data();
    this.documents = this.documentService.get_documents();
  }

  jsonDoc(selected: number) {
    return JSON.stringify(this.documents[selected]);
  }
}
