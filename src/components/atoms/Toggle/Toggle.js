import { useState } from "react";

export const Toggle = () => {
  const [isActive, setIsActive] = useState(false);
  const toggle = () => setIsActive(!isActive);
  return <button onClick={toggle}>{isActive ? "ON" : "OFF"}</button>;
};
