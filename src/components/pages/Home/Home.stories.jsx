import { Home } from "./Home";

export default {
  title: "Components/Pages/Home",
  component: Home,
};

const Template = (args) => <Home {...args} />;
export const Default = Template.bind({});
Default.args = {};
