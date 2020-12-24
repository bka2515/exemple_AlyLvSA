import { Bien } from './bien.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BiensService {
  private biens: Bien[]=[
    {id:1, 
      title: "voiture",
      description:"Lorem10",
      price: "400000fcfa",
      image:"https://source.unsplash.com/random/1080x780?keybord%27",
      state:12,
      category:"individuel",
      sale:true,
      createAt:new Date(2018,4)
  },
  {id:2, 
    title: "voiture",
    description:"Lorem10",
    price: "400000fcfa",
    image:'https://source.unsplash.com/random/1080x780?home%27',
    state:12,
    category:"individuel",
    sale:true,
    createAt:new Date(2018,4)
},
{id:3, 
  title: "voiture",
  description:"Lorem10",
  price: "400000fcfa",
  image:'https://source.unsplash.com/random/1080x780?home%28',
  state:12,
  category:"individuel",
  sale:true,
  createAt:new Date(2018,4)
},
{id:4, 
title: "voiture",
description:"Lorem10",
price: "400000fcfa",
image:"https://source.unsplash.com/random/1080x780?keybord%29",
state:12,
category:"individuel",
sale:true,
createAt:new Date(2018,4)
},
{id:5, 
title: "voiture",
description:"Lorem10",
price: "400000fcfa",
image:"https://source.unsplash.com/random/1080x780?keybord%30",
state:12,
category:"individuel",
sale:true,
createAt:new Date(2018,4)
},
{id:6, 
title: "voiture",
description:"Lorem10",
price: "400000fcfa",
image:"https://source.unsplash.com/random/1080x780?keybord%31",
state:12,
category:"individuel",
sale:true,
createAt:new Date(2018,4)
}
  ]
    
  
  constructor() {}
  getAllbiens(){
    
    return this.biens;

  }
  getBienByid(id:number){
    const bienFound= this.biens.find(
      (b:Bien)=>{
        return b.id ===id;
    
   
    }
    ); 
    return bienFound;
  }
  addBien(newBien: Bien){
this.biens.push(newBien);
  }
  UpdateBien(bienUpdated: Bien){
    var OldBien : Bien=this.biens.find(
      (b:Bien)=>{
        return b.id===bienUpdated.id;
      }
    );
    if(OldBien){
      OldBien={...bienUpdated};
    }
  }
  getLatestId(): number{
    return this.biens[this.biens.length -1] ?
    this.biens[this.biens.length -1].id :0;
  }
//   getSimilarBiensByID(id:number):Bien{
// thi
//   }
}
