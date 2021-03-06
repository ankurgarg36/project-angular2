import {Component, OnInit} from "@angular/core";
import {ProductResponse} from "../../../response/product.response";
import {ProductService} from "../../../service/product.service";
import {ProductMaterialResponse} from "../../../response/product-material.response";
import {ProductColorResponse} from "../../../response/product-color.response";
import {ProductType, PriceRange, ProductCategory} from "../../../app.config";
import {SearchBasedProductResponse} from "../../../response/search-based-product.response";

@Component({
  moduleId : module.id,
  selector : 'sarees-component',
  templateUrl: 'sarees.component.html'
})

export class SareesComponent implements OnInit{
  public products : ProductResponse = [];
  public productMaterial : ProductMaterialResponse = [];
  public productColor : ProductColorResponse = [];
  public productPrice :any;
  public searchTerm : any;

  public selectedColor ="";
  public selectedMaterial ="";
  public selectedPrice ="";

  constructor(private _productService : ProductService){}
/*  constructor (private _pRequest : ProductRequest){
    _pRequest.category = "sarees";
  }*/

  ngOnInit(): void {
    this._productService.getProducts(ProductCategory.saree).then(pResponse =>{this.products=pResponse;});

    this._productService
      .getProductMaterial(ProductType.saree)
      .subscribe((mResponse:ProductMaterialResponse[]) => this.productMaterial=mResponse,
        error => console.log(error),
        () => console.log('Get all material complete'));

    this._productService
      .getProductColor(ProductType.saree)
      .subscribe((cResponse:ProductColorResponse[]) => this.productColor=cResponse,
        error => console.log(error),
        () => console.log('Get all color complete'));
        this.productPrice = PriceRange;
  }

  materialFilter(materialType : number) {
    this.selectedColor = "";
    this.selectedPrice = "";
    this._productService
      .getSearchBasedProducts(ProductCategory.saree,materialType)
      .subscribe((cResponse:SearchBasedProductResponse) => {
          this.products=cResponse.products;
          this.searchTerm = cResponse.searchTitle;
      },
        error => console.log(error));
  }

  colorFilter(colorType : number) {
    this.selectedMaterial = "";
    this.selectedPrice = "";
    this._productService
      .getSearchBasedProducts(ProductCategory.saree,null,colorType)
      .subscribe((cResponse:SearchBasedProductResponse) => {
          this.products=cResponse.products;
          this.searchTerm = cResponse.searchTitle;
        },
        error => console.log(error));
  }

  priceFilter(priceTag :string){
    this.selectedMaterial = "";
    this.selectedColor = "";
    this._productService
      .getSearchBasedProducts(ProductCategory.saree,null,null,priceTag)
      .subscribe((cResponse:SearchBasedProductResponse) => {
          this.products=cResponse.products;
          this.searchTerm = cResponse.searchTitle;
        },
        error => console.log(error));
  }

}
