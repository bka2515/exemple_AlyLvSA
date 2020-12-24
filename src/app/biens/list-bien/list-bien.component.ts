import { SearchService } from './../search.service';
import { Bien } from './../bien.model';
import { BiensService } from './../biens.service';
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-list-bien',
  templateUrl: './list-bien.component.html',
  styleUrls: ['./list-bien.component.css']
})
export class ListBienComponent implements OnInit {
  // @Input() receiveSearchFromApp:string=''
  search: string="";
  biens: Bien[];
  // X:number[]=[1,0];
  
  //  =[
    
  //   //id(number),title(string),description)(string),price,image(string),state(number),category(string),sale(boolean),createAt(Date)

  // ];

  constructor(private biensService: BiensService, private searchsev: SearchService) { 
   
  }
  newValue(){
    this.searchsev.changeValue('');
  }

  ngOnInit(): void {
    this.biens= this.biensService.getAllbiens();
    this.searchsev.currentSearch.subscribe(search=>this.search=this.search);
  }

}
