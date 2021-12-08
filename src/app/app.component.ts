import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-storybook';

  handleButtonClick() {
    console.log("Button clicked on page");
  }

  handleClick() {
    console.log("Button clicked on page");
  }
}
