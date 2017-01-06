import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {Ng2TabModule} from "ng2-tab";

import {AppComponent} from "./app.component";
import {FooterComponent} from "./footer-component/footer.component";
import {HeaderComponent} from "./header-component/header.component";
import {BottomBlockComponent} from "./bottom-block-component/bottom-block.component";
import {HomeRoutingModule, routedComponents} from "./home-routing.module";
import {TopArrivalComponent} from "./top-arrival-component/top-arrival.component";
import {APP_CONFIG, AppConfig} from "../../app.config";
import {ProductModule} from "../product/product.module";
import {HomeTabComponent} from "./home-tab-component/home-tab.component";
import '../rxjs-extensions';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProductModule,
    HomeRoutingModule,
    Ng2TabModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BottomBlockComponent,
    TopArrivalComponent,
    routedComponents,
    HomeTabComponent
  ],
  providers: [{provide : APP_CONFIG,useValue : AppConfig}],
  bootstrap: [AppComponent]
})

export class HomeModule { }
