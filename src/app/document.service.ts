import { Injectable } from '@angular/core';
import {markdown_fixtures} from "./fixtures/markdown.fixtures";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  documents = markdown_fixtures;

  constructor() { }

  get_documents() {
    return this.documents;
  }
}
