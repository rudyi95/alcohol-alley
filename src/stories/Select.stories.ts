import type { Meta, StoryObj } from "@storybook/react";

import { SelectForm } from "src/features";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Select",
  component: SelectForm,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SelectForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    data: [
      { value: "Item 1", label: "Item 1" },
      { value: "Item 2", label: "Item 2" },
    ],
    label: "Select",
  },
};
