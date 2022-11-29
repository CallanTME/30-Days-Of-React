import { useState, useEffect } from "react";
function Clock(props) {
  const [date, setDate] = useState(new Date());
  const color = props.background;

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <div className={"main-wrapper"} style={{ backgroundColor: color }}>
      {date.toLocaleTimeString()}
    </div>
  );
}
export default Clock;
