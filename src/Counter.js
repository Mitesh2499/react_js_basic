import React, { useEffect } from "react";

function Counter({ count }) {
  useEffect(() => {
    console.log("counter");
  }, []);

  return <div>{count}</div>;
}

export default Counter;
