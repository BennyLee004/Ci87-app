import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import ThemeContext from "../../contexts/ThemeContext";
import * as Icon from "react-feather";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  const linkClassName = (params) => {
    return `header__link ${params.isActive ? "header__link-active" : ""}`;
  };
  return (
    <div className="header">
      <div className="navigation">
        <NavLink className={linkClassName} to="/">
          Home
        </NavLink>
        <NavLink className={linkClassName} to="/todo-page">
          Todo Page
        </NavLink>
      </div>
      <div className="btn-theme">
        {theme === "light" ? (
          <button value={theme} onClick={() => setTheme("dark")}>
            <Icon.Sun color="black" />
          </button>
        ) : (
          <button value={theme} onClick={() => setTheme("light")}>
            <Icon.Moon color="black" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
