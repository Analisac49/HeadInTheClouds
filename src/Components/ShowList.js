import React from 'react';
import { Link } from 'react-router-dom';

const ShowList = ({ shows }) => {
  return (
    <div>
      {shows.map((show) => (
        <div key={show.id}>
          <h2>{show.name}</h2>
          <img src={`https://image.tmdb.org/t/p/w500${show.backdrop_path}`}/>
        </div>
      ))}
    </div>
  );
};

export default ShowList;