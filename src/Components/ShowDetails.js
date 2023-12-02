import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowDetails = ({ shows }) => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=ddd2f3943117356c3b4540d5cf58f0d5`);
        const data = await response.json();
        setShow(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchShowDetails();
  }, [id]);

  if (!show) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{show.name}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={show.name} />
      <p>Overview: {show.overview}</p>
      <p>First Air Date: {show.first_air_date}</p>
    </div>
  );
};

export default ShowDetails;
