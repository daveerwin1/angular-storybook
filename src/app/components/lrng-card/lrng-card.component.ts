import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-lrng-card',
  templateUrl: './lrng-card.component.html',
  styleUrls: ['./lrng-card.component.scss']
})
export class LrngCardComponent implements OnInit {

  @Input() submodules = '';

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
