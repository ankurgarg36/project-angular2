import { platformBrowser }    from '@angular/platform-browser';
import {AppModuleNgFactory} from "../../aot/app/main/home/home.module.ngfactory";


platformBrowser().bootstrapModuleFactory(HomeModuleNgFactory)
  .then(success => console.log(`Bootstrap success`))
  .catch(error => console.log(error));
