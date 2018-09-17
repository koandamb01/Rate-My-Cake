import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rate My Cake';
  cakes: string[]
  newCake: any;
  selectCake: any;
  cakeMessage: any;
  ratingMessage: any;
  constructor(private _HttpService: HttpService) { }

  ngOnInit() {
    this.getCakes();
    this.newCake = { baker: "", imageUrl: "" };
    this.cakeMessage = {
      status: "",
      message: { baker: "", imageUrl: "" }
    };
    this.ratingMessage = {
      status: "",
      cakeID: "",
      message: { comment: "", rate: "" }
    }
  }

  getCakes() {
    let observation = this._HttpService.getCakes();
    observation.subscribe(response => {
      this.cakes = response['cakes'];
    });
  }

  postCake() {
    let observation = this._HttpService.postCake(this.newCake);
    observation.subscribe(response => {
      if (response['status'] == "Error") {
        this.cakeMessage = response;
      } else {
        this.cakeMessage = {
          status: response['status'],
          message: { baker: "", imageUrl: "" }
        };
        setTimeout(() => { this.ngOnInit(); }, 2000);
      }
    });
  }


  postRating(Rating, cakeID) {
    let observe = this._HttpService.postRating(Rating, cakeID);
    observe.subscribe(response => {
      if (response['status'] == "Error") {
        this.ratingMessage = response;
        this.ratingMessage['cakeID'] = cakeID;
      } else {
        this.ratingMessage = {
          status: response['status'],
          cakeID: cakeID,
          message: { baker: "", imageUrl: "" }
        };
        setTimeout(() => { this.ngOnInit(); }, 2000);
      }
    })
  }

  getCake(cake) {
    this.selectCake = cake;
    let counter = 0;
    let sum = 0;
    if (cake.ratings.length != 0) {
      for (let rating of cake.ratings) {
        counter++;
        sum += parseInt(rating.rating);
      }
      this.selectCake['average'] = (sum / counter).toFixed(2);
    } else {
      this.selectCake['average'] = "No rating yet. Be the first to rate this cake";
    }
  }
}
