import '../src/styles/index.scss'
import '../src/stories/hack/hack.scss'
import {withInfo} from "@storybook/addon-info";
import React from "react";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  info: {
    inline: true
  }
}
export const decorators = [
  (Story) => <div style={{ textAlign: 'center' }}>{Story()}</div>,
  withInfo
]
