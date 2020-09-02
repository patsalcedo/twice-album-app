import React, { useState } from "react";

const Album = ({ album }) => {
  return (
    <div className="album">
      <h1>{album.name}</h1>
      <ul>
        <li>Type: {album.type}</li>
        <li>Release Date: {album.release_date}</li>
        <li>Title Track: {album.title_track}</li>
      </ul>
      <ul>
        {album.tracklist.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      <img src={album.image} alt="" />
    </div>
  );
};

export default Album;
