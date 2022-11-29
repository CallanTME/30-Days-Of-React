import { useState, useEffect } from "react";
function Clock() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  function setTimeOfDay() {
    const hours = new Date().getHours();
    if (hours < 12) {
      return "#40ccff";
    } else if (hours < 17) {
      return "#eed061";
    } else if (hours < 20) {
      return "#ff7100";
    } else {
      return "#0055be";
    }
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <div className={"main-wrapper"} style={{ backgroundColor: setTimeOfDay() }}>
      {date.toLocaleTimeString()}
    </div>
  );
}
export default Clock;
