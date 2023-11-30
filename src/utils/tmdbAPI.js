const API_KEY = 'ddd2f3943117356c3b4540d5cf58f0d5';

export const searchTVShows = async (query, genre, releaseYear, minRating, maxRating) => {
  const endpoint = 'https://api.themoviedb.org/3/search/tv';
  const params = {
    api_key: API_KEY,
    query,
    genre,
    'first_air_date_year': releaseYear,
    'vote_average.gte': minRating,
    'vote_average.lte': maxRating,
  };

  try {
    const response = await fetch(`${endpoint}?${new URLSearchParams(params)}`);
    if (!response.ok) {
      throw new Error('Failed to fetch TV shows from TMDB API');
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error(error.message);
  }
};