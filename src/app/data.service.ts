import { Injectable } from '@angular/core';
import {data_fixtures} from "./fixtures/data.fixtures";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = data_fixtures;

  constructor() { }

  get_data() {
    return this.data;
  }
}
