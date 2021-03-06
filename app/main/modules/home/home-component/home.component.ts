import {Component, OnInit, ElementRef, Inject, ViewEncapsulation} from "@angular/core";

import  '../../../../resources/js/jquery-1.11.3.min.js'
import  '../../../../resources/js/jquery.bxslider.js'
import {Router, NavigationEnd} from "@angular/router";

declare var jQuery:any;

@Component({
  moduleId: module.id,
  selector: 'home-component',
  styleUrls : ['jquery.bxslider.css'],
  templateUrl :'home.component.html',
  encapsulation: ViewEncapsulation.None,
})

export class HomeComponent implements OnInit{
  elementRef: ElementRef;

  constructor(
    @Inject(ElementRef) elementRef: ElementRef,
    private router : Router) {
    this.elementRef = elementRef;
    router.events.subscribe((event:Event)=>{
      if(event instanceof NavigationEnd)
      {
        window.scrollTo(0,0);
      }
    });
  }

  ngOnInit() {
    jQuery(this.elementRef.nativeElement).find(".bxslider").bxSlider({
       infiniteLoop: true,
       hideControlOnEnd: false,
      auto:true
     });
  }
}
