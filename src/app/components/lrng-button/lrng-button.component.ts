import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-lrng-button',
  templateUrl: './lrng-button.component.html',
  styleUrls: ['./lrng-button.component.scss']
})
export class LrngButtonComponent implements OnInit {

  @Input() label = 'Button';

  @Input() classes = '';

  @Input() disabled = false;

  @Output() onClick = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.onClick.emit();
  }
}
