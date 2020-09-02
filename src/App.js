import React, { useState, useEffect } from "react";
import twicelogo from "./twicelogo.svg";
import "./App.css";
import albumService from "./albumService";
import Album from "./Components/Album";
import Search from "./Components/Search";

const App = () => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    getAlbumDetails();
  }, [query]);

  const updateSearch = (evt) => {
    setSearch(evt.target.value);
  };

  const getSearch = (evt) => {
    evt.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const getAlbumDetails = () => {
    albumService().then((result) => {
      setAlbum(result);
      // console.log(result.hits);
    });
  };

  return (
    <div className="App">
      <Search search={search} />
      <header className="App-header">
        <img src={twicelogo} className="App-logo" alt="logo" />
        <p>TWICE Album App</p>
        <a
          className="App-link"
          href="https://youtu.be/mH0_XpSHkZo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stream MORE & MORE
        </a>
      </header>
      <div className="album">
        {album.map((album) => (
          <Album
            key={album.album.albumkey}
            name={album.album.name}
            type={album.album.type}
            release_date={album.album.release_date}
            title_track={album.album.title_track}
            tracklist={album.album.tracklist}
            image={album.album.image}
          />
        ))}
      </div>
      <p className="names">
        NAYEON | JEONGYEON | MOMO | SANA | JIHYO
        <br />
        <t />
        MINA | DAHYUN | CHAEYOUNG | TZUYU
      </p>
    </div>
  );
};
export default App;
