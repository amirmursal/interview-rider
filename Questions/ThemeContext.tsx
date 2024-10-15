import { createContext } from "react";

const ThemeContext = createContext(null);

const App = () => {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  );
};

export default App;
