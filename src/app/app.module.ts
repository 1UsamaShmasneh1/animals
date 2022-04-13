import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import{HttpClientModule} from '@angular/common/http'
import{Routes, RouterModule}from '@angular/router'
import { FormsModule } from '@angular/forms';
import { MainCompComponent } from './components/main-comp/main-comp.component';
import { DogComponent } from './components/dog/dog.component';
import { CatsComponent } from './components/cats/cats.component';
import { CatPicComponent } from './components/cat-pic/cat-pic.component';

const animalRouts:Routes = [
  {path: '', component:MainCompComponent},
  {path: 'dog', component:DogComponent},
  {path: 'cat', component:CatsComponent},
  {path: 'catPic', component:CatPicComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainCompComponent,
    DogComponent,
    CatsComponent,
    CatPicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(animalRouts)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
