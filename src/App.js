import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Todo from "./pages/Todo";
import ThemeContext from "./contexts/ThemeContext";
import HomePage from "./pages/Home/HomePage";
import Header from "./components/Header";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo-page" element={<Todo />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
{
  /* <HandleThemeTodo />; */
}
