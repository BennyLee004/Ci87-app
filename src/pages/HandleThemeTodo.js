import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import Todo from "./Todo";
import * as Icon from "react-feather";

const HandleThemeTodo = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const themeContext = useContext(ThemeContext);
  const todoPageClassName = `handle-theme-todo ${
    themeContext.theme === "light"
      ? "handle-theme-todo-page--pink"
      : "handle-theme-todo-page--dark"
  }`;

  return (
    <div className={todoPageClassName}>
      {theme === "light" ? (
        <button value={theme} onClick={() => setTheme("dark")}>
          <Icon.Sun color="white" />
        </button>
      ) : (
        <button value={theme} onClick={() => setTheme("light")}>
          <Icon.Moon color="white" />
        </button>
      )}
      <Todo />
    </div>
  );
};

export default HandleThemeTodo;
