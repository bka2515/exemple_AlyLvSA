import { BiensService } from './../biens.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-details-biens',
  templateUrl: './details-biens.component.html',
  styleUrls: ['./details-biens.component.css']
})
export class DetailsBiensComponent implements OnInit {

  constructor(private route: ActivatedRoute,private biensService: BiensService) {}

  ngOnInit(): void {
    const idBien= +this.route.snapshot.params['id'];
    const bien= this.biensService.getBienByid(idBien);
    //for next time that this component will be loaded
    this.route.params.subscribe(
      (p:Params)=>{
        const idBien= +this.route.snapshot.params['id'];
        const bien= this.biensService.getBienByid(idBien);
      }
    );
  }
  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

}
