import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  cats:any[] = []

  constructor(private _http:AnimalService) {
    this._http
          .getCatText()
          .subscribe((cats:any) => {
            this.cats = cats
          })
  }

  ngOnInit(): void {
  }

}
