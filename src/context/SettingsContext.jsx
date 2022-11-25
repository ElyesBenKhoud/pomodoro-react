import React, { createContext, useState } from "react";

export const SettingsContext = createContext();

const SettingsContextProvider = (props) => {
  const [pomodoro, setPomodoro] = useState(0);
  const [executing, setExecuting] = useState({});
  const [startAnimate, setStartAnimate] = useState(false);

  function startTimer() {
    setStartAnimate(true);
  }
  function pauseTimer() {
    setStartAnimate(false);
  }
  function stopTimer() {
    setStartAnimate(false);
  }

  const SettingsBtn = () => {
    setExecuting({});
    setPomodoro(0);
  };

  function setCurrentTimer(active_state) {
    updateExecute({
      ...executing,
      active: active_state,
    });
    setTimerTime(executing);
  }

  const updateExecute = (updatedSettings) => {
    setExecuting(updatedSettings);
    setTimerTime(updatedSettings);
  };

  const setTimerTime = (evaluate) => {
    switch (evaluate.active) {
      case "work":
        setPomodoro(evaluate.work);
        break;
      case "short":
        setPomodoro(evaluate.short);
        break;
      case "long":
        setPomodoro(evaluate.long);
        break;

      default:
        setPomodoro(0);
        break;
    }
  };

  const children = ({ remainingTimer }) => {
    const minutes = Math.floor(remainingTimer / 60);
    const seconds = remainingTimer % 60;
    return `${minutes}:${seconds}`;
  };
  return (
    <SettingsContext.Provider
      value={{
        stopTimer,
        updateExecute,
        pomodoro,
        startAnimate,
        startTimer,
        pauseTimer,
        SettingsBtn,
        setCurrentTimer,
        children,
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
