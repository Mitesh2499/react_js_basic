import { useState } from "react";
import "./App.css";
import "./css/test.css";
// https://api.themoviedb.org/3/search/movie?api_key=14a117ba5adb4431bd4fec8362448964&language=en-US&query=The%20Amazing%20Spider-Man
function App() {
  let [num, setNum] = useState(0);

  const increamentNum = () => {
    console.log("increamentNum");
    setNum((prev) => prev + 1);
  };
  const decrementNum = () => {
    console.log("decrementNum");
    setNum((prev) => prev - 1);
  };

  const handlClick = (isPositiveClicked) => {
    console.log(isPositiveClicked);
    if (isPositiveClicked) {
      setNum((prev) => prev + 1);
    } else {
      setNum((prev) => prev - 1);
    }
  };
  return (
    <div>
      <button disabled={num == 0} onClick={() => handlClick(false)}>
        -
      </button>
      <h5>{num}</h5>
      <button disabled={num == 20} onClick={() => handlClick(true)}>
        +
      </button>
    </div>
  );
}

export default App;

// https://fpm15.csb.app/
