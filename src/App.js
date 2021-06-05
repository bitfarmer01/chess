import "./App.css";
import Chessboard from "chessboardjsx";
import Chess from "chess.js";
import logo from "./logo.svg";
import { useState, useRef, useEffect } from "react";

function App() {
  const [fen, setFen] = useState("start");
  let game = useRef(null);
  useEffect(() => {
    game.current = new Chess();
  }, []);
  const onDrop = ({ sourceSquare, targetSquare }) => {
    let move = game.current.move({
      from: sourceSquare,
      to: targetSquare,
    });
    if (move === null) return;

    setFen(game.current.fen());
    console.log(fen);
  };
  return (
    <div>
      <img className="logo" src={logo} alt="chess logo" />

      <div className="container">
        <Chessboard position={fen} onDrop={onDrop} />
      </div>
    </div>
  );
}

export default App;
