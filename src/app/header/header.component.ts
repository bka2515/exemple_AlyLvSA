import { SearchService } from './../biens/search.service';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent implements OnInit {
  // @Output() searchEvent= new EventEmitter()
  // searchval:string;

  constructor(private data: SearchService) { }
  // filter(){
  //   this.searchEvent.emit(
  //     this.searchval
  //   )
  // }

  ngOnInit(){
    this.data.currentSearch.subscribe(this.search=search)
  }

  newMessageSearch(){
    this.data.changeValue(search);
  }

}
