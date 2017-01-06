import {Component, OnInit} from "@angular/core";
import {HomeService} from "../home.service";
import {TopArrival} from "./top-arrival";

@Component({
  moduleId: module.id,
  selector: 'top-arrival',
  templateUrl :'top-arrival.component.html',
  providers: [HomeService]
})

export class TopArrivalComponent implements OnInit{

  public topArrivals : TopArrival = [];

  constructor(private _homeService : HomeService){}

  ngOnInit(): void {
    this._homeService.getTopArrivals().then(topArr =>{this.topArrivals=topArr;
    });
  }

}
