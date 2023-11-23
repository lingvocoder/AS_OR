import type {Meta, StoryObj} from '@storybook/angular';
import {componentWrapperDecorator,moduleMetadata} from "@storybook/angular";
import Button from './button.component';
import ParentComponent from './parent.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<Button> = {
  title: 'Example/Button',
  component: Button,
  decorators:[
    moduleMetadata({
      declarations:[ParentComponent]
    }),
    componentWrapperDecorator(ParentComponent),
  ],
  tags: ['autodocs'],
  render: (args: Button) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  args:{
    label:'Сообщить об ошибке'
  }
};

export default meta;
type Story = StoryObj<Button>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
  },
  parameters: {


  },
};

export const Secondary: Story = {
  args: {
    primary:false
  },
};

export const Tiny: Story = {
  args: {
    ...Primary.args,
    size: 'tiny',
  }
}
export const Small: Story = {
  args: {
    ...Primary.args,
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    ...Primary.args,
    size: 'medium',
  },
};
export const Large: Story = {
  args: {
    ...Primary.args,
    size: 'large',
  },
};


