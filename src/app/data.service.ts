import { Injectable } from '@angular/core';
import {data_fixtures} from "./fixtures/data.fixtures";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = data_fixtures;
  selected_data = 0;

  constructor() { }

  get_data() {
    return this.data;
  }

  set_selected(value) {
    this.selected_data = value;
  }

  get_selected_data() {
    return this.data[this.selected_data]
  }
}
