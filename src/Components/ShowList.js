import React from 'react';

const ShowList = ({ shows }) => {
  return (
    <div>
      {/* Display show information */}
      {shows.map((show) => (
        <div key={show.id}>
          <h2>{show.name}</h2>
          {/* Add more show details here */}
        </div>
      ))}
    </div>
  );
};

export default ShowList;