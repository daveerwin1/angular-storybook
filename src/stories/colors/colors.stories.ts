import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {ColorsComponent} from "./colors.component";

export default {
  title: 'Example/Colors',
  component: ColorsComponent,
  decorators: [],
} as Meta;

const Template: Story<ColorsComponent> = (args: ColorsComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {

};
