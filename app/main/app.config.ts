import {OpaqueToken} from "@angular/core";

export let APP_CONFIG = new OpaqueToken("app.config");

export interface IAppConfig {
  apiEndpoint: string;
}

export const AppConfig: IAppConfig = {
  apiEndpoint: "http://www.wholesalesarees.com/api/"
};

export const MenuLinks = [
    {url:'/home' , text:'Home'},
    {url:'/about-us' , text:'About Us'},
    {url:'/sarees' , text:'Sarees'},
    {url:'/suit' , text:'Suit-Salvar'},
    {url:'/lengha' , text:'Lengha-Chunni'},
    {url:'/contact' , text:'Contact Us'},
]
