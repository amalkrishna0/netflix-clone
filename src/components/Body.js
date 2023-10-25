import React, { useEffect, useState, useCallback } from 'react';
import './body.css';

export default function Body() {
  const [filmss, setFilmss] = useState([]);
  const [currentFilmIndex, setCurrentFilmIndex] = useState(0);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmVlNGU4NzdhNmRmN2IwY2Q1NWQ2N2VlYjQ1N2Y1YSIsInN1YiI6IjY1MjQyZTEzYWI1ZTM0MDBjNDdkNjY5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3rBQxPdndikjHSy1CQrBesNOr5R3MT-PIsIn-Dh8Nnc',
      },
    };

    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-IN&page=1', options)
      .then((response) => response.json())
      .then((data) => {
        setFilmss(data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  const nextFilm = useCallback(() => {
    if (currentFilmIndex < filmss.length - 1) {
      setCurrentFilmIndex(currentFilmIndex + 1);
    }
  }, [currentFilmIndex, filmss]);

  const prevFilm = useCallback(() => {
    if (currentFilmIndex > 0) {
      setCurrentFilmIndex(currentFilmIndex - 1);
    }
  }, [currentFilmIndex]);

  return (
    <div className="body">
      <div className="main_body">
        {filmss.length > 0 && currentFilmIndex < filmss.length && (
          <>
            <img
              className="img_popular"
              src={`https://image.tmdb.org/t/p/w1280${filmss[currentFilmIndex].poster_path}`}
              alt={filmss[currentFilmIndex].original_title}
            />
            <div className="content">
              <div className="title">{filmss[currentFilmIndex].original_title}</div>
              <div className="description">{filmss[currentFilmIndex].overview}</div>
              <div className="navigation">
                <button onClick={prevFilm} disabled={currentFilmIndex === 0} className='prevFilm'>

                </button>
                <button onClick={nextFilm} disabled={currentFilmIndex === filmss.length - 1} className='nextFilm'>

                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
