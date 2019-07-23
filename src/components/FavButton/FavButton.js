import React from 'react';

export const FavButton = (movieData, user_id, currentUserFavorites) => {
  const toggle = currentUserFavorites.find(
    fav => fav.movie_id === movieData.movie_id
  );
  return (
    <button movieData={movieData} user_id={user_id}>
      {toggle === -1 ? 'Favorite' : 'Unfavorite'}
    </button>
  );
};
