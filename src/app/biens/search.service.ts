import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private stringSource= new BehaviorSubject<unknown>('');
  currentSearch = this.stringSource.asObservable();
    
  changeValue(message:string){
    this.stringSource.next(message);
  }

  constructor() { }
}
