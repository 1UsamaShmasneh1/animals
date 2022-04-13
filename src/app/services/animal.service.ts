import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private client:HttpClient) { }

  getDogPic(){
    return this.client.get('https://dog.ceo/api/breeds/image/random')
  }

  getCatText(){
    return this.client.get('https://cat-fact.herokuapp.com/facts')
  }

  getCatPic(){
    return this.client.get('https://aws.random.cat/meow?ref=apilist.fun')
  }
}
