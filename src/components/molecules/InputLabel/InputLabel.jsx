import { Input, Label } from "../../atoms";

export const InputLabel = ({ label, placeholder }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Label label={label} />
      <Input placeholder={placeholder} />
    </div>
  );
};
