import { SearchService } from './biens/search.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message:string;
  constructor(private data: SearchService){

  }
  ngOnInit(){
    this.data.currentSearch.subscribe(search=>this.message=this.message);
  }
  // receiveValue:string=''
  // receiveSearch (s:string){
  //   this.receiveValue=s;
  // }
  // nom = 'Penda Diallo';
  // ok= false;
  // textBtn= "Activer";

  // onClickBtn(){
  //   this.ok = !this.ok;
  //   this.textBtn= this.ok ? 'Desactiver':'Activer';
    
  // }
}
