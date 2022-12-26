import Input from "./Input";
import { storiesOf } from "@storybook/react";
import React from "react";

const defaultInput = () => (
    <Input
        style={{width: '300px'}}
        placeholder={'default input'}
    />
)

const disabledInput = () => (
    <Input
        style={{width: '300px'}}
        placeholder={'disabled'}
        disabled
    />
)

const iconInput = () => (
    <Input
        style={{width: '300px'}}
        placeholder="input with icon"
        icon="coffee"
    />
)

storiesOf('Input component', module)
    .add('Input', defaultInput)
    .add('被禁用的 Input', disabledInput)
    .add('带图标的 Input', iconInput)
    .add('大小不同的 Input', defaultInput)
    .add('带前后缀的 Input', defaultInput)