import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-lrng-card2',
  templateUrl: './lrng-card2.component.html',
  styleUrls: ['./lrng-card2.component.scss']
})
export class LrngCard2Component implements OnInit {

  @Input() classes = '';

  @Input() buttonDisabled = false;

  @Output() onClick = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }

  handleButtonClick() {
    console.log("button clicked in card");
    this.onClick.emit();
  }
}
