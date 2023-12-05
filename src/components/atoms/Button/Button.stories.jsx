import { Button } from "./Button";

export default {
  title: "Components/Atoms/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: "label",
};
