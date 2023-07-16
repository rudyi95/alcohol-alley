import type { Meta, StoryObj } from "@storybook/react";

import Snackbar from "src/components/snackBar";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Snackbar",
  component: Snackbar,
  tags: ["autodocs"],
  argTypes: {
    type: { control: "radio", options: ["error", "info", "success", "warning"] },
  },
} satisfies Meta<typeof Snackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    type: "success",
    text: "Test snackbar",
    open: true,
  },
};
