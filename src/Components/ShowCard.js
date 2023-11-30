import React from 'react';

const ShowCard = ({ show }) => {
  const { name, poster_path, vote_average, overview, first_air_date, episode_run_time } = show;

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w185${poster_path}`} alt={`${name} Poster`} />
      <h3>{name}</h3>
      <p>Rating: {vote_average}</p>
      <p>First Air Date: {first_air_date}</p>
      <p>Overview: {overview}</p>
      <p>Episode Run Time: {episode_run_time} minutes</p>
    </div>
  );
};

export default ShowCard;
