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

export const ProductType = {
  saree: 1,
  suit: 2,
  lengha: 3,
};

export const ProductCategory = {
  saree: "saree",
  suit: "suit",
  lengha: "lengha",
};

export const PriceRange = [
  {range:'0-1000',text:'less than 1000'},
  {range:'1000-1500',text:'1000-1500'},
  {range:'1500-2000',text:'1500-2000'},
  {range:'2000-3000',text:'2000-3000'},
  {range:'3000',text:'Above 3000'}
];
