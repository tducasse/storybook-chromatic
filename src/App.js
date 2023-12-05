import { Provider } from "./store";
import { Home } from "./components/pages";

const App = () => {
  const value = { title: "my title" };

  return (
    <div>
      <h1>React App</h1>
      <Provider value={value}>
        <Home />
      </Provider>
    </div>
  );
};

export default App;
