import { StoreDecorator } from "../../../__stories__/decorators";
import { NavBar } from "./NavBar";

export default {
  title: "Components/Organisms/NavBar",
  component: NavBar,
  decorators: [StoreDecorator],
};

const Template = (args) => <NavBar {...args} />;
export const Default = Template.bind({});
Default.args = {};
