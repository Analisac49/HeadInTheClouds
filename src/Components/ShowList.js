import React from 'react';
import { Link } from 'react-router-dom';

const ShowList = ({ shows }) => {
  return (
    <div>
      {shows.map((show) => (
        <div key={show.id}>
          <Link to={`/show/${show.id}`}>
          <h2>{show.name}</h2>
          </Link>
          <img src={`https://image.tmdb.org/t/p/w500${show.backdrop_path}`}/>
          <p> {show.overview} </p>
          
        </div>
      ))}
    </div>
  );
};

export default ShowList;