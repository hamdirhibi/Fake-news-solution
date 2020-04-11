import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verifyaccount',
  templateUrl: './verifyaccount.component.html',
  styleUrls: ['./verifyaccount.component.css']
})
export class VerifyaccountComponent implements OnInit {

  constructor() { }

  result: string = '';

  ngOnInit() {
  }

  save(event: any): void {
    var selectedFiles = event.target.files;
    for (var i = 0; i < selectedFiles.length; i++) {
      this.result += '<br>File Name: ' + selectedFiles[i].name;
      this.result += '<br>File Size(byte): ' + selectedFiles[i].size;
      this.result += '<br>File Type: ' + selectedFiles[i].type;
      this.result += '<br>----------------------------';
    }
  }


}
