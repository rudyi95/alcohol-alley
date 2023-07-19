/* eslint-disable no-self-assign */
import type { Meta, StoryObj } from "@storybook/react";

import { SimpleCard } from "src/components/card";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Card",
  component: SimpleCard,
  tags: ["autodocs"],
  argTypes: {
    navigate: { type: "function" },
  },
} satisfies Meta<typeof SimpleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    data: {
      _id: "64a3e95c122f2100148fa760",
      name: "Frontera Carmenere",
      image: "https://alcohol-alley.s3.eu-north-1.amazonaws.com/9c034fde13dced1395e11670baa8ee43",
      price: 145,
    },
    navigate: () => {
      window.location.href = window.location.href;
    },
  },
};
