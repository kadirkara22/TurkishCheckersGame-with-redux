import React from 'react'
import "./tile.css"
const Tile = ({ number, image }) => {
    console.log(image)
    return (
        <div>
            {
                number % 2 === 0 ? <div className="tile black-tile">{<img className="piece-image" src={image} alt=""></img>}</div>
                    : <div className="tile white-tile">{<img className="piece-image" src={image} alt=""></img>}</div>

            }

        </div>
    )
}

export default Tile
