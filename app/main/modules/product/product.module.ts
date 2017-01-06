
import {NgModule} from "@angular/core";
import {SareesComponent} from "./sarees-component/sarees.component";
import {ProductRoutingModule, productRoutedComponents} from "./product-routing.module";
import {ProductService} from "../../service/product.service";
import {BrowserModule} from "@angular/platform-browser";
import {Ng2PaginationModule} from "ng2-pagination";

@NgModule({
  imports: [BrowserModule, ProductRoutingModule,Ng2PaginationModule],
  declarations: [productRoutedComponents],
  bootstrap: [SareesComponent],
  providers: [ProductService]
})

export class ProductModule { }
