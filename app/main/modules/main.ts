import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {HomeModule} from "./home/home.module";


platformBrowserDynamic().bootstrapModule(HomeModule)
  .then(success => console.log(`Bootstrap success`))
  .catch(error => console.log(error));

