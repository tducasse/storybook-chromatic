import { Button } from "../../atoms";
import { InputLabel } from "../../molecules";

export const NavBar = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", columnGap: 10 }}>
      <Button>Log in</Button>
      <Button>Register</Button>
      <InputLabel label={"search"} placeholder={"type something"} />
    </div>
  );
};
