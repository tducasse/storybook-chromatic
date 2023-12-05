import { InputLabel } from "./InputLabel";

export default {
  title: "Components/Molecules/InputLabel",
  component: InputLabel,
};

const Template = (args) => <InputLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "label",
  placeholder: "placeholder",
};
