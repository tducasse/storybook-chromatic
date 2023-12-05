import { useStore } from "../../../store";
import { Button, Label } from "../../atoms";
import { InputLabel } from "../../molecules";

export const NavBar = () => {
  const { title } = useStore();
  return (
    <div style={{ display: "flex", flexDirection: "row", columnGap: 10 }}>
      <Label label={title}></Label>
      <Button>Log in</Button>
      <Button>Register</Button>
      <InputLabel label={"search"} placeholder={"type something"} />
    </div>
  );
};
