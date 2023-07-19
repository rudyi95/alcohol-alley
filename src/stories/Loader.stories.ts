import type { Meta, StoryObj } from "@storybook/react";

import { Loader } from "src/shared/ui";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Loader",
  component: Loader,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Wrapped: Story = {
  args: {
    wrapped: true,
  },
};

export const WrappedOff: Story = {
  args: {
    wrapped: false,
  },
};
