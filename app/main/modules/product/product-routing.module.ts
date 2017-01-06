import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {SareesComponent} from "./sarees-component/sarees.component";
import {ProductDetailComponent} from "./product-detail-component/product-detail.component";

const routes: Routes = [
  {
    path: 'sarees',
    component: SareesComponent
  },
  {
    path: 'product/:product-category/:product-title/:product-code',
    component: ProductDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

export const productRoutedComponents = [SareesComponent,ProductDetailComponent];
