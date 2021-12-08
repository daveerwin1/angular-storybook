import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lrng-page2',
  templateUrl: './lrng-page2.component.html',
  styleUrls: ['./lrng-page2.component.scss']
})
export class LrngPage2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleButtonClick() {
    console.log("button clicked lrng-page")
  }
}
