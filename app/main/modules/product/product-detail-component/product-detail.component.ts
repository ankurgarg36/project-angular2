import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductResponse} from "../../../response/product.response";
import {ProductService} from "../../../service/product.service";

/*import  '../../../../resources/js/jquery-1.11.3.min.js'
 import  '../../../../resources/js/cloud-zoom.1.0.2.min.js'*/

declare var jQuery:any;

@Component({
  moduleId : module.id,
  selector : 'product-detail',
  templateUrl: 'product-detail.component.html',
  styleUrls: ['cloud-zoom.css']
})

export class ProductDetailComponent implements OnInit{
  public product : ProductResponse =[];
  public productSuggestions : ProductResponse =[];
  // elementRef: ElementRef;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _productService : ProductService,
              /*@Inject(ElementRef) elementRef: ElementRef*/) {
    /*this.elementRef = elementRef;*/
  }
  ngOnInit(): void {

    this.route.params.subscribe(params => {

      let pCode = +params['product-code'];
      let pCategory = params['product-category'];

      this._productService
        .getProduct(pCategory,pCode)
        .then(pResponse =>{
          if(pResponse == null || pResponse.length  == 0 ){
            this.router.navigate(['**']);
          }
          this.product=pResponse.pd;
          this.productSuggestions=pResponse.ps
        }).catch(error => this.error = error);

    });

    // jQuery(this.elementRef.nativeElement).find(".cloud-zoom").CloudZoom();
  }
}
