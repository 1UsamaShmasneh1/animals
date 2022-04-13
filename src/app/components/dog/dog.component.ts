import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  dogPic:string = ''

  constructor(private _http:AnimalService) { }

  showDog(){
    this._http
          .getDogPic()
          .subscribe((pic:any) => {
            this.dogPic = pic.message
          })
  }

  ngOnInit(): void {
  }

}
