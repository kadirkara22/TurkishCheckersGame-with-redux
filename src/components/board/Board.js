import React from "react";
import Tile from "../tile/Tile";
import "./board.css";
import blackPiece from "../../assets/images/black.png"
import whitePiece from "../../assets/images/white.png"
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
let activePiece = null;
const grabPiece = (e) => {
  const element = e.target
  if (element.classList.contains("checker-piece")) {
    console.log(e.target)

    const x = e.clientX - 50;
    const y = e.clientY - 50;
    element.style.position = "absolute";
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;

    activePiece = element;
  }
}
const moviePiece = (e) => {
  if (activePiece) {
    const x = e.clientX - 50;
    const y = e.clientY - 50;
    activePiece.style.position = "absolute";
    activePiece.style.left = `${x}px`;
    activePiece.style.top = `${y}px`;

  }
}


const dropPiece = (e) => {
  if (activePiece) {
    activePiece = null
  }
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

      board.push(<Tile key={`${j},${i}`} image={image} number={number} />);

    }
  }

  return <div className="board"
    onMouseMove={(e) => moviePiece(e)}
    onMouseDown={(e) => grabPiece(e)}
    onMouseUp={(e) => dropPiece(e)}
  >{board}</div>;
};

export default Board;
