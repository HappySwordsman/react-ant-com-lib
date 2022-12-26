/*
 * @Author: yexiaolong
 * @Date: 2022-12-26 15:03:43
 * @Description: 
 */
import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
// import { action } from '@storybook/addon-actions'
import Menu from './Menu';
import MenuItem from './MenuItem';
import SubMenu from "./SubMenu";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Menu Component',
  component: Menu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof Menu>;

const defaultMenu = () => (
  <Menu defaultIndex={'0'} onSelect={(index) => alert(index)} defaultOpenSubMenus={['2']}>
    <MenuItem>
      cool link
    </MenuItem>
    <MenuItem disabled>
      cool link2
    </MenuItem>
    <SubMenu title='dropdown'>
      <MenuItem>dropdown1</MenuItem>
      <MenuItem>dropdown2</MenuItem>
    </SubMenu>
    <MenuItem>
      cool link3
    </MenuItem>
  </Menu>
)

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: ComponentStory<typeof Menu> = () => defaultMenu();
Primary.storyName = 'Menu';