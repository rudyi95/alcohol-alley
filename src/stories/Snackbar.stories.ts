import type { Meta, StoryObj } from "@storybook/react";

import { SnackBarComp } from "src/shared/ui";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Snackbar",
  component: SnackBarComp,
  tags: ["autodocs"],
  argTypes: {
    type: { control: "radio", options: ["error", "info", "success", "warning"] },
  },
} satisfies Meta<typeof SnackBarComp>;

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
