import { useEffect, useState } from "react";

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date) => {
    const day = date.toLocaleDateString("en-US", { weekday: "short" });
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const dayNum = date.getDate();

    const time = date
      .toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      })
      .replace("AM", "am")
      .replace("PM", "pm");

    return `${day} ${month} ${dayNum} ${time}`;
  };

  return <div>{formatDateTime(currentTime)}</div>;
};

export default DateTime;
