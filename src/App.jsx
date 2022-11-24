import CountDownAnimation from "./components/CountDownAnimation";
import SetPomodoro from "./components/SetPomodoro";

function App() {
  return (
    <div className="container">
      <h1> Pomodoro</h1>
      <small>Be productive the right way.</small>
      {/* <SetPomodoro /> */}
      <CountDownAnimation />
    </div>
  );
}

export default App;
