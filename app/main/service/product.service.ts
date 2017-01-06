import {Injectable, Inject} from "@angular/core";
import {Headers, Http, URLSearchParams, Response} from "@angular/http";
import "rxjs/add/operator/toPromise";

import {IAppConfig, APP_CONFIG} from "../app.config";
import {ProductResponse} from "../response/product.response";
import {Observable} from "rxjs/Observable";
import {ProductMaterialResponse} from "../response/product-material.response";

@Injectable()
export class ProductService{
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http,@Inject(APP_CONFIG) private config: IAppConfig){
    this.headers.append('Access-Control-Allow-Origin','true');
  }

  getProducts(category:string,limit :number = null):Promise<ProductResponse[]>{
    let parameters = new URLSearchParams();
    parameters.set('category',category);
    parameters.set('limit',limit);
    return this.http.get(this.config.apiEndpoint + "products.php" , {search:parameters})
      .toPromise()
      .then(response => {
        return response.json().data as ProductResponse[];
      })
      .catch(this.handleError)
  }

  getProduct(category:string,code:string):Observable<ProductResponse>{
    let parameters = new URLSearchParams();
    parameters.set('category',category);
    parameters.set('code',code);
    return this.http.get(this.config.apiEndpoint + "product.php" , {search:parameters})
      .toPromise()
      .then(response => {
        return response.json().data as ProductResponse;
      })
      .catch(this.handleError)
  }

  getProductMaterial(type:number):Observable<ProductMaterialResponse[]>{
    let parameters = new URLSearchParams();
    parameters.set('product_type',type);
    return this.http.get(this.config.apiEndpoint + "material.php" , {search:parameters})
      .map((response : Response)=><ProductMaterialResponse>response.json().data)
      .catch(this.handleNewError);
  }

  private handleError(error : any) : Promise<any>{
    console.error('An error occurred',error);
    return Promise.reject(error.message || error);
  }

  private handleNewError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
