import { useState } from "react";
import "./App.css";
import { FaStar } from "react-icons/fa";

function App() {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [clickedIndex, setClickedIndex] = useState(-1);

  const handleHover = (i) => {
    setHoverIndex(i);
  };

  const handleClick = (i) => {
    setClickedIndex(i);
  };

  const renderStar = () => {
    const star = [];
    for (let i = 0; i < 5; i++) {
      star.push(
        <div
          key={i}
          className="starDiv"
          onMouseEnter={() => handleHover(i)}
          onClick={() => {
            handleClick(i);
          }}
        >
          <FaStar
            color={i <= hoverIndex || i <= clickedIndex ? "yellow" : "grey"}
            size="30"
          />
          {/* <p>{hoverIndex}</p>
          <p>{clickedIndex}</p> */}
        </div>
      );
    }
    return star;
  };

  return (
    <div className="App">
      <div className="starContainer" onMouseLeave={() => setHoverIndex(-1)}>
        {renderStar()}
      </div>
    </div>
  );
}

export default App;
