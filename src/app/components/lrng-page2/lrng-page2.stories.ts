import { Story, Meta } from '@storybook/angular/types-6-0';
import { LrngPage2Component } from './lrng-page2.component'
import {moduleMetadata} from "@storybook/angular";
import {LrngCard2Component} from "../lrng-card2/lrng-card2.component";
import {LrngButtonComponent} from "../lrng-button/lrng-button.component";

import * as ButtonStories from '../lrng-button/lrng-button.stories';


// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/LRNG-Page2',
  component: LrngPage2Component,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [LrngCard2Component, LrngButtonComponent],
    }),
  ],
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const PageExample= Template.bind({});
PageExample.args = {
  buttonDisbabled: true,
};


