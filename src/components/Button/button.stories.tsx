import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import Button, { ButtonSize, ButtonType } from './button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button Component',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => <div style={{ textAlign: 'center' }}>{Story()}</div>,
    withInfo
  ],
  parameters: {
    info: {
      text: `
        this is a very nice component
        ## this is a header
        ~~~js
        const a = 'hello'
        ~~~
      `,
      inline: true
    }
  }
} as ComponentMeta<typeof Button>;

const defaultButton = () => (
  <Button onClick={action('clicked')}>default button</Button>
)

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: ComponentStory<typeof Button> = () => defaultButton();
Primary.storyName = '默认 Button';

const buttonWithSize = () => (
  <>
    <Button size={ButtonSize.Large}>large button</Button>
    <Button size={ButtonSize.Small}>small button</Button>
  </>
)

export const ButtonWithSize: ComponentStory<typeof Button> = () => buttonWithSize();
ButtonWithSize.storyName = '不同尺寸 Button';

const buttonWithType = () => (
  <>
    <Button btnType={ButtonType.Primary}>primary button</Button>
    <Button btnType={ButtonType.Danger}>danger button</Button>
    <Button btnType={ButtonType.Link} href={"https://lx520.cool/index"}>link button</Button>
  </>
)

export const ButtonWithType: ComponentStory<typeof Button> = () => buttonWithType();
ButtonWithType.storyName = '不同类型 Button';