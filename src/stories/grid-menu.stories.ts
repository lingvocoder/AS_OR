import type {Meta,StoryObj} from "@storybook/angular";
import {componentWrapperDecorator, moduleMetadata} from "@storybook/angular";
import ParentComponent from "./parent.component";
import GridMenuComponent from "./grid-menu.component";

const meta: Meta<GridMenuComponent> = {
  title: 'Example/Grid-menu',
  component: GridMenuComponent,
  decorators:[
    moduleMetadata({
      declarations:[ParentComponent]
    }),
    componentWrapperDecorator(ParentComponent),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<GridMenuComponent>;
