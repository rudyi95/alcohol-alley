/* eslint-disable no-script-url */
import type { Meta, StoryObj } from "@storybook/react";

import { BreadCrumbs } from "src/components/breadCrumbs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/BreadCrumbs",
  component: BreadCrumbs,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof BreadCrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    links: [
      {
        text: "Page 1",
        url: "javascript:window.location.href=window.location.href",
      },
      {
        text: "Page 2",
        url: "javascript:window.location.href=window.location.href",
      },
      {
        text: "Page 3",
        url: "javascript:window.location.href=window.location.href",
      },
    ],
  },
};
