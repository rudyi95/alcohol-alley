import type { Meta, StoryObj } from "@storybook/react";

import { CustomInput } from "src/components/CustomInput";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Input",
  component: CustomInput,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CustomInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Input"
  },
};
