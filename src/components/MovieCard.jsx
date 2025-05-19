import { HTMLProps, useState, useEffect } from "react"
//import Popup from "./Popup.jsx";

const MovieCard = ({ movie: { id, title, year, poster, type, price }}) => {
        const addDefaultImg = ev => { ev.target.src = "/src/assets/no-movie.png"}
        const [openPopup, setOpenPopup] = useState(false)
        const [movie, setMovie] = useState([]);

    return (
        <div className="movie-card" id={id} onClick={() => { setOpenPopup(true); }} style={{cursor: 'pointer'}}>
            <img
                src={poster ?
                    poster : '/src/assets/no-movie.png'}
                alt={title}
                onError={addDefaultImg}
            />

            <div className="mt-4">
                <h3>{title}</h3>

                <div className="content">
                    <span>•</span>
                    <p className="lang">{type}</p>

                    <span>•</span>
                    <p className="year">
                        {year ? year : 'N/A'}
                    </p>
                </div>
                <div className="content">
                    <span>•</span>
                    <p className="lang">${price}</p>
                </div>
            </div>
             {/* { <Popup key={id} 
                title={title}
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                movie={movie}>
            </Popup> }  */}
        </div>
    )
}
export default MovieCard