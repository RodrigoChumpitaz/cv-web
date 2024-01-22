import { DataService } from '@/services/data.service';
import { GenericObject } from '@/types/generic-object';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  RESUME_DATA: GenericObject;
  constructor(private dataService: DataService){
    this.RESUME_DATA = this.dataService.data;
  }
}
