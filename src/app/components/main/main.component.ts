import { DataService } from '@/services/data.service';
import { GenericObject } from '@/types/generic-object';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  RESUME_DATA: GenericObject;
  showToast: boolean = false;
  valueFromClipboard: { value: string; message: string; showToast: boolean; timer: any }[] = [];
  
  constructor(private dataService: DataService){
    this.RESUME_DATA = this.dataService.data;
  }


  copyValue(target: number): void{
    let valueToCopy: string = '';
    let timeoutDuration: number = 1500;
    let message: string = '';

    if (target === 1) {
      valueToCopy = this.RESUME_DATA['contact'].email;
      message = 'Email copied to clipboard ✔';
    } else if (target === 2) {
      valueToCopy = this.RESUME_DATA['contact'].tel;
      message = 'Phone number copied to clipboard 📱';
    } else {
      return;
    }
    navigator.clipboard.writeText(valueToCopy);
    const newToast = { value: valueToCopy, message: message, showToast: true, timer: null as any };
    this.valueFromClipboard.push(newToast);
    
    newToast.timer = setTimeout(() => {
      newToast.showToast = false;
      this.removeToast(this.valueFromClipboard.indexOf(newToast));
    }, timeoutDuration);
  }

  removeToast(index: number): void {
    this.valueFromClipboard.splice(index, 1);
  }
}
