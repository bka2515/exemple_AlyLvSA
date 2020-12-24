import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BiensComponent } from './biens/biens.component';
import { AddBiensComponent } from './biens/add-biens/add-biens.component';
import { DetailsBiensComponent } from './biens/details-biens/details-biens.component';
import { JumbotronBienComponent } from './biens/jumbotron-bien/jumbotron-bien.component';
import { ListBienComponent } from './biens/list-bien/list-bien.component';
import { ItemBienComponent } from './biens/item-bien/item-bien.component';
import { SeparatorPipe } from './pipes/separator.pipe';
import { TimeLeftPipe } from './pipes/time-left.pipe';
import { SummarizePipe } from './pipes/summarize.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { RouterModule, Routes} from '@angular/router'
import { ReservationBiensComponent } from './biens/reservation-biens/reservation-biens.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const appRoute: Routes=[
  {path: '',redirectTo: '/biens', pathMatch:'full'},
  {path: 'biens', component: ListBienComponent},
  {path: 'biens/add', component: AddBiensComponent}, 
  {path: 'biens/:id', component: DetailsBiensComponent}, 

  {path: 'reservations', component: ReservationBiensComponent},
  {path: 'reservations', component: ReservationBiensComponent},
  {path: 'reservations', component: ReservationBiensComponent},

  {path: 'not-found', component: PageNotFoundComponent},
  
];


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BiensComponent,
    AddBiensComponent,
    DetailsBiensComponent,
    JumbotronBienComponent,
    ListBienComponent,
    ItemBienComponent,
    SeparatorPipe,
    TimeLeftPipe,
    SummarizePipe,
    FilterPipe,
    ReservationBiensComponent,
    PageNotFoundComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
