import { StoreDecorator } from "../../../__stories__/decorators";
import { Home } from "./Home";

export default {
  title: "Components/Pages/Home",
  component: Home,
  decorators: [StoreDecorator],
};

const Template = (args) => <Home {...args} />;
export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  store: {
    title: "my storybook title",
  },
};
