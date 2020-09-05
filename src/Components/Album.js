import React from "react";

const Album = ({ name, type, release_date, title_track, tracklist }) => {
  return (
    // <div className="album">
    //   <h1>{album.name}</h1>
    //   <ul>
    //     <li>Type: {album.type}</li>
    //     <li>Release Date: {album.release_date}</li>
    //     <li>Title Track: {album.title_track}</li>
    //   </ul>
    //   <ul>
    //     {album.tracklist.map((value, index) => {
    //       return <li key={index}>{value}</li>;
    //     })}
    //   </ul>
    //   <img src={album.image} alt="" />
    // </div>
    <div className="album">
      <h1>{name}</h1>
      <ul>
        <li>Type: {type}</li>
        <li>Release Date: {release_date}</li>
        <li>Title Track: {title_track}</li>
      </ul>
      <ul>
        {tracklist.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      {/* <img src={image} alt="" /> */}
    </div>
  );
};

export default Album;
