import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import Input from './input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Input Component',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof Input>;

const defaultInput = () => (
  <Input
    style={{width: '300px'}}
    placeholder={"placeholder"}
  />
)

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: ComponentStory<typeof Input> = () => defaultInput();
Primary.storyName = 'Input';

const InputDisabled = () => (
  <Input
    style={{width: '300px'}}
    placeholder={'disabled'}
    disabled
  />
)
export const InputWithDisabled: ComponentStory<typeof Input> = () => InputDisabled();
InputWithDisabled.storyName = '被禁用的 Input';

const InputIcon = () => (
  <Input
    style={{width: '300px'}}
    placeholder='我有图标吆'
    icon='search'
  />
)
export const InputWithIcon: ComponentStory<typeof Input> = () => InputIcon();
InputWithIcon.storyName = '带图标的 Input';

// const buttonWithSize = () => (
//   <div>
//     <Button size={ButtonSize.Large}>large button</Button>
//     <Button size={ButtonSize.Small}>small button</Button>
//   </div>
// )
//
// export const ButtonWithSize: ComponentStory<typeof Button> = () => buttonWithSize();
// ButtonWithSize.storyName = '不同尺寸 Button';