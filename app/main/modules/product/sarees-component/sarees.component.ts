import {Component, OnInit} from "@angular/core";
import {ProductResponse} from "../../../response/product.response";
import {ProductService} from "../../../service/product.service";
import {ProductMaterialResponse} from "../../../response/product-material.response";

@Component({
  moduleId : module.id,
  selector : 'sarees-component',
  templateUrl: 'sarees.component.html'
})

export class SareesComponent implements OnInit{
  public products : ProductResponse = [];
  public productMaterial : ProductMaterialResponse = [];

  constructor(private _productService : ProductService){ }
/*  constructor (private _pRequest : ProductRequest){
    _pRequest.category = "sarees";
  }*/

  ngOnInit(): void {
    this._productService.getProducts("saree").then(pResponse =>{this.products=pResponse;});
    // this._productService.getProductMaterial(1).then(mResponse =>{this.productMaterial=mResponse;});
    this._productService
      .getProductMaterial(1)
      .subscribe((mResponse:ProductMaterialResponse[]) => this.productMaterial=mResponse,
        error => console.log(error),
        () => console.log('Get all Items complete'));
  }
}
