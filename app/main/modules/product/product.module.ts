import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {Ng2PaginationModule} from "ng2-pagination";
import {BrowserModule} from "@angular/platform-browser";

import {SareesComponent} from "./sarees-component/sarees.component";
import {ProductRoutingModule, productRoutedComponents} from "./product-routing.module";
import {ProductService} from "../../service/product.service";

@NgModule({
  imports: [BrowserModule,FormsModule,ProductRoutingModule,Ng2PaginationModule],
  declarations: [productRoutedComponents],
  bootstrap: [SareesComponent],
  providers: [ProductService]
})

export class ProductModule { }
