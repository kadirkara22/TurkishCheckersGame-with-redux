import React from "react";
import Tile from "../tile/Tile";
import "./board.css";
import blackPiece from "../../assets/images/blackpul.PNG"
import whitePiece from "../../assets/images/whitepul.PNG"
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizantalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

const pieces = [
]
for (let i = 0; i < 8; i++) {
  pieces.push({ image: blackPiece, x: i, y: 6 });
}
for (let i = 0; i < 8; i++) {
  pieces.push({ image: blackPiece, x: i, y: 5 });
}
for (let i = 0; i < 8; i++) {
  pieces.push({ image: whitePiece, x: i, y: 1 });
}
for (let i = 0; i < 8; i++) {
  pieces.push({ image: whitePiece, x: i, y: 2 });
}

const Board = () => {
  let board = [];
  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizantalAxis.length; i++) {
      const number = j + i + 2;
      let image = undefined;

      pieces.forEach((p) => {
        if (p.x === i && p.y === j) {
          image = p.image;

        }
      });

      board.push(<Tile image={image} number={number} />);

    }
  }

  return <div className="board">{board}</div>;
};

export default Board;
