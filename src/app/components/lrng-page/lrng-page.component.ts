import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lrng-page',
  templateUrl: './lrng-page.component.html',
  styleUrls: ['./lrng-page.component.scss']
})
export class LrngPageComponent implements OnInit {

  @Input() cardButtonDisabled = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleButtonClick() {
    console.log("button clicked lrng-page")
  }
}
