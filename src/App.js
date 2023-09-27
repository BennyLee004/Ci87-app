import "./App.css";

import ThemeContext from "./contexts/ThemeContext";
import { useState } from "react";
import HandleThemeTodo from "./pages/HandleThemeTodo";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
        <HandleThemeTodo/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
