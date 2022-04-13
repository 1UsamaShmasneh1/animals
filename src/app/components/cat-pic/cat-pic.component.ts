import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-cat-pic',
  templateUrl: './cat-pic.component.html',
  styleUrls: ['./cat-pic.component.css']
})
export class CatPicComponent implements OnInit {

  catPic:string = ''

  constructor(private _http:AnimalService) { }

  showCat(){
    this._http
          .getCatPic()
          .subscribe((pic:any) => {
            this.catPic = pic.file
          })
  }

  ngOnInit(): void {
  }

}
