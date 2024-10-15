import React, { useContext } from "react";

const Button = () => {
  // Theme conetxt needs to imported from other file

  const theme = useContext(ThemeContext);

  return <button>Click Me</button>;
};
