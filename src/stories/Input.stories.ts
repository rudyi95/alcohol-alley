import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "src/shared/ui";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "radio", options: ["SM", "MD", "LG"] },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Input",
    size: "MD",
    variant: "filled",
  },
};
