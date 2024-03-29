/*
 * @Author: yexiaolong
 * @Date: 2022-12-26 16:13:05
 * @Description: 
 */
import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import Button, { ButtonSize, ButtonType } from './button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button Component',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof Button>

const defaultButton = () => (
  <div>
    <Button disabled onClick={action('clicked')}>default button</Button>
    <Button disabled btnType={ButtonType.Link} href="http://www.baidu.com" onClick={action('clicked')}>link button</Button>
  </div>
)

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: ComponentStory<typeof Button> = () => defaultButton();
Primary.storyName = '禁用的Button';

const buttonWithSize = () => (
  <div>
    <Button size={ButtonSize.Large}>large button</Button>
    <Button size={ButtonSize.Small}>small button</Button>
  </div>
)

export const ButtonWithSize: ComponentStory<typeof Button> = () => buttonWithSize();
ButtonWithSize.storyName = "不同尺寸 Button";

const buttonWithType = () => (
  <div>
    <Button btnType={ButtonType.Primary}>primary button</Button>
    <Button btnType={ButtonType.Danger}>danger button</Button>
    <Button btnType={ButtonType.Link} href={"https://lx520.cool/index"}>link button</Button>
  </div>
)

export const ButtonWithType: ComponentStory<typeof Button> = () => buttonWithType();
ButtonWithType.storyName = '不同类型 Button';
