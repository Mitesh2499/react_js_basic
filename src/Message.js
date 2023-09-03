import { useEffect, useState } from "react";

function Message({ count }) {
  const [data, setData] = useState(100);
  useEffect(() => {
    console.log("test");
    setData(count);
  });

  return <h1>Hello {data} </h1>;
}

export { Message };
