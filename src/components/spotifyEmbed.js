import React from 'react';
import { Spotify } from 'react-spotify-embed';

export const SpotifyEmbed = () => {
  return (
    <Spotify
      wide
      link="https://open.spotify.com/playlist/0vvXsWCC9xrXsKd4FyS8kM?si=79p8cZRES3iuaNDQzLcB5w"
      width="400"
      theme="black"
    />
  );
};

export default SpotifyEmbed;
