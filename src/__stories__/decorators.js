import { Provider } from "../store";

export const StoreDecorator = (storyFn, context) => {
  const { parameters } = context;
  const value = {
    title: "default storybook state",
    ...parameters?.store,
  };
  return <Provider value={value}>{storyFn()}</Provider>;
};
