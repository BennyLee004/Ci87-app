import {useContext} from "react";
import ThemeContext from "../../contexts/ThemeContext";
function HomePage() {
  const themeContext = useContext(ThemeContext);
  const todoPageClassName = `home-page ${
    themeContext.theme === "light"
      ? "handle-theme-todo-page--pink"
      : "handle-theme-todo-page--dark"
  }`;
  return (
    <div className={todoPageClassName}>
      <div className="repon-home-page">
      <h1>An online Pomodoro Timer to boost your productivity</h1>
      <h3>What is Pomofocus?</h3>
      <p>
        Pomofocus is a customizable pomodoro timer that works on desktop &
        mobile browser. The aim of this app is to help you focus on any task you
        are working on, such as study, writing, or coding. This app is inspired
        by Pomodoro Technique which is a time management method developed by
        Francesco Cirillo
      </p>
      <h3>How to use the Pomodoro Timer?</h3>
      <ol>
        <li><b>Add tasks</b> to work on today</li>
        <li><b>Set estimate pomodoros</b> (1 = 25min of work) for each tasks</li>
        <li><b>Select a task</b> to work on</li>
        <li><b>Take a break</b> for 5 minutes when the alarm ring</li>
        <li><b>Iterate</b> 3-5 until you finish the tasks</li>
      </ol>
      </div>
      
    </div>
  );
}

export default HomePage;
