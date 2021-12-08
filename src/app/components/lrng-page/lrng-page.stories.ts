import { Story, Meta } from '@storybook/angular/types-6-0';
import { LrngPageComponent } from './lrng-page.component'
import {moduleMetadata} from "@storybook/angular";
import {LrngCardComponent} from "../lrng-card/lrng-card.component";
import {LrngButtonComponent} from "../lrng-button/lrng-button.component";


// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/LRNG-Page',
  component: LrngPageComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [LrngCardComponent, LrngButtonComponent],
    }),
  ],
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const PageExample= Template.bind({});
PageExample.args = {

};

export const ButtonDisabled= Template.bind({});
ButtonDisabled.args = {
  cardButtonDisabled: true
};
