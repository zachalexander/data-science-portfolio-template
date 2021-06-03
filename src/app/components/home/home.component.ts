import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as jumboCases from '../../../assets/jumbotron.json';
import * as jumboCasesBar from '../../../assets/jumbotronbar.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  fakecases = jumboCases['fakedata'];
  fakecasesbar;
  height;
  width;
  mobile;

  constructor( ) { }

  ngOnInit() {

    this.width = window.innerWidth;
    this.height = document.getElementById('top').clientHeight;

    if (this.width >= 600) {
      this.mobile = false;
    } else {
      this.mobile = true;
    }

    this.drawJumbo();
    this.drawJumboBar();

  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  drawJumbo() {
    this.fakecases = jumboCases;
  }

  drawJumboBar() {
    this.fakecasesbar = jumboCasesBar;
  }

}
