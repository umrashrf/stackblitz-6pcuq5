import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const HTTP_URL = 'http://umrashrf89.pythonanywhere.com/'

@Component({
  selector: 'code',
  template: `
    <textarea 
      rows=5 
      cols=30 
      maxlength=20 
      placeholder="Type max 20 characters" 
      [(ngModel)]=code>
    </textarea>
    <p><button (click)="send()">Send information to API</button></p>
    <textarea rows=5 cols=30 value="{{output}}"></textarea>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class CodeComponent  {
  @Input() code: string;
  output: string;

  constructor(private httpClient: HttpClient) {
  }

  send = () => {
    if (this.code) {
      this.httpClient
        .get(HTTP_URL)
        .subscribe((res)=>{
            alert(res);
        });
    }
  }
}
