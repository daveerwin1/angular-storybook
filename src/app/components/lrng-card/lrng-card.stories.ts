import { Story, Meta } from '@storybook/angular/types-6-0';
import { LrngCardComponent } from './lrng-card.component'
import {moduleMetadata} from "@storybook/angular";
import {LrngButtonComponent} from "../lrng-button/lrng-button.component";


// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/LRNG-Card',
  component: LrngCardComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [LrngButtonComponent],
    }),
  ],
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Primary= Template.bind({});
Primary.args = {
  classes: 'card',
};

export const ButtonDisabled= Template.bind({});
ButtonDisabled.args = {
  classes: 'card',
  buttonDisabled: true,
};
