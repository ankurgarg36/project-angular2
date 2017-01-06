import {Injectable, Inject} from "@angular/core";
import {Headers, Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {TopArrival} from "./top-arrival-component/top-arrival";
import {IAppConfig, APP_CONFIG} from "../../app.config";

@Injectable()
export class HomeService{
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http,@Inject(APP_CONFIG) private config: IAppConfig){
    this.headers.append('Access-Control-Allow-Origin','true');
  }

  getTopArrivals():Promise<TopArrival[]>{
    return this.http.get(this.config.apiEndpoint + "top-arrival.php")
      .toPromise()
      .then(response => {
        return response.json().data as TopArrival[];
      })
      .catch(this.handleError)
  }

  private handleError(error : any) : Promise<any>{
    console.error('An error occurred',error);
    return Promise.reject(error.message || error);
  }

}
