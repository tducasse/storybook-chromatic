import { Label } from "./Label";

export default {
  title: "Components/Atoms/Label",
  component: Label,
};

const Template = (args) => <Label {...args} />;
export const Default = Template.bind({});
Default.args = {
  label: "label",
};
