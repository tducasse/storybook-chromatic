import { InputLabel } from "../../molecules";
import { NavBar } from "../../organisms";

export const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: 10 }}>
      <NavBar />
      <InputLabel label={"Username"} placeholder={"my name"} />
      <InputLabel label={"Password"} placeholder={"pass"} />
    </div>
  );
};
