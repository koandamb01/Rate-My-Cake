import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getCakes() {
    return this._http.get('/cakes');
  }

  getcake(cakeID) {
    return this._http.get('/cake/' + cakeID);
  }

  postCake(newcake) {
    return this._http.post('/cake', newcake);
  }

  putCake(cakeID, cake) {
    return this._http.put('/cake/' + cakeID, cake);
  }

  postRating(Rating, cakeID) {
    return this._http.post('/rate/' + cakeID, Rating);
  }
}
