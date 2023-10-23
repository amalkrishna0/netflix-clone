import React, { useEffect, useState } from 'react'
import './popularfilm.css'
export default function PopularFilm() {
  const [films, setFilms] = useState([])
  const [series, setSeries] = useState([])

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmVlNGU4NzdhNmRmN2IwY2Q1NWQ2N2VlYjQ1N2Y1YSIsInN1YiI6IjY1MjQyZTEzYWI1ZTM0MDBjNDdkNjY5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3rBQxPdndikjHSy1CQrBesNOr5R3MT-PIsIn-Dh8Nnc'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-IN&page=1', options)
      .then(response => response.json())

      .then(data => setFilms(data.results))

      .catch(err => console.error(err));


  }, [])
  return (
    <div className="container">
      <strong className='popular'>Popular Movie</strong>
      <div className="row1">
        {films.map((film, i) => (
          <div className="col-md-3" key={i}>
            <div className="card" style={{ width: '14rem' }} data-rating= {film.vote_average}>
              <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.original_title} />
              <div className="card-body">
                <p className="card-text">
                  <strong>{film.original_title}</strong>
                </p>
              </div>
              <span className="tooltip">{film.vote_average}</span>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}
