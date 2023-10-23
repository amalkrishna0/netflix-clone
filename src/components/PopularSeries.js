import React, { useEffect, useState } from 'react'
import './popularseries.css'
export default function PopularSeries() {
  const [series, setSeries] = useState([])

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmVlNGU4NzdhNmRmN2IwY2Q1NWQ2N2VlYjQ1N2Y1YSIsInN1YiI6IjY1MjQyZTEzYWI1ZTM0MDBjNDdkNjY5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3rBQxPdndikjHSy1CQrBesNOr5R3MT-PIsIn-Dh8Nnc'
      }
    };

    fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
      .then(response => response.json())
      .then(data => setSeries(data.results))
      .catch(err => console.error(err));
  }, [])
  return (
    <div className="container">     
      <strong className='popular'>Popular Series</strong>
      <div className="row2">
        {series.map((serie, i) => (
          <div className="col-md-3" key={i}>
            <div className="card" style={{ width: '14rem' }}>
              <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} alt={serie.original_title} />
              <div className="card-body">
                <p className="card-text">
                  <strong>{serie.name}</strong>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
