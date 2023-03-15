import { Component, OnInit, HostBinding } from '@angular/core';
import * as AOS from 'aos';



/* FontAwesome */
import {  } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'vpopulus';

  ngOnInit() : void {
    AOS.init();
    console.log(AOS)
  }

}
