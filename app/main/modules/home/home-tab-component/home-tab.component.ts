import {Component, OnInit} from "@angular/core";
import {ProductResponse} from "../../../response/product.response";
import {ProductService} from "../../../service/product.service";

@Component({
  moduleId: module.id,
  selector: 'home-tab',
  templateUrl :'home-tab.component.html',
   providers: [ProductService]
})

export class HomeTabComponent implements OnInit{

  public pSaree : ProductResponse ;
  public pSuit  : ProductResponse;
  public pLengha : ProductResponse ;

  constructor(private _productService : ProductService){}

  ngOnInit(): void {
    this._productService.getProducts("saree",10).then(pResponse =>{this.pSaree=pResponse;});
    this._productService.getProducts("suit",10).then(pResponse =>{this.pSuit=pResponse;});
    this._productService.getProducts("lengha",10).then(pResponse =>{this.pLengha=pResponse;});
  }

}
