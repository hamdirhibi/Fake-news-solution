import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MdbTablePaginationComponent, MdbTableDirective } from 'projects/angular-bootstrap-md/src/public_api';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  result: string = '';
  user : any  = {
      name : 'hamdi rhibi' , 
      verified : true ,
      userImage : 'https://mdbootstrap.com/img/Photos/Avatars/img (21).jpg'
  }
  constructor(private wowService: NgwWowService) {
    this.wowService.init();
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
