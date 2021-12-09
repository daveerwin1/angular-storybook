import { Story, Meta } from '@storybook/angular/types-6-0';
import { LrngButtonComponent } from './lrng-button.component'


// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/LRNG-Button',
  component: LrngButtonComponent,
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  submodules: 'button-primary'
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Button',
  submodules: 'button-primary',
  disabled: true,
};

export const WithAriaLabel = Template.bind({});
WithAriaLabel.args = {
  label: 'Button',
  submodules: 'button-primary',
  arialabel: 'This is a groovy button, click it',
}

