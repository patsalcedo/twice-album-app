import React from "react";

const AlbumTwo = ({ name, release_date, title_track }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{release_date}</p>
      <p>{title_track}</p>
    </div>
  );
};

export default AlbumTwo;
