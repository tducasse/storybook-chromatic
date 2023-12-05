import { expect } from "@storybook/jest";
import { Toggle } from "./Toggle";
import { within } from "@storybook/test";

export default {
  title: "Components/Atoms/Toggle",
  component: Toggle,
};

const Template = (args) => <Toggle {...args} />;
export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const off = canvas.getByText("OFF");
  expect(off).toBeInTheDocument();
  off.click();
  const on = await canvas.findByText("ON");
  expect(on).toBeInTheDocument();
};
