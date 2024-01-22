import { Injectable } from '@angular/core';
import { ResumeData } from '../data/info-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _data = ResumeData;
  constructor() { }

  get data() {
    return this._data;
  }
}
