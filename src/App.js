import React, { useState, useEffect } from "react";
import twicelogo from "./twicelogo.svg";
import "./App.css";
import Album from "./Components/Album";
import AlbumTwo from "./Components/AlbumTwo";
import albums from "./albums.json";

const App = () => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    getAlbumDetails();
  }, [query]); // whenever whatever is in [] changes, the useEffect hook will rerun

  const getAlbumDetails = async () => {
    const response = await fetch("albums.json");
    const data = await response.json();
    const queryData = data.filter((item) => item.name === query);
    // const qDataArr = Object.values(queryData);
    console.log(queryData);
    setAlbum(queryData);
    console.log("album", album);

    // SO THE PROBLEM: it does return the object but it does not setAlbum at the same time
    // you have to press Search twice to have the album set to the queried album
    // and it sitll does not display on page.

    // fetch("albums.json")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setAlbum(data);
    //   });
  };

  const updateSearch = (evt) => {
    setSearch(evt.target.value);
  };

  const getSearch = (evt) => {
    evt.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          placeholder="Search for a TWICE album..."
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
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
      {album.map((album) => (
        <AlbumTwo
          key={album.albumkey}
          nameAlbum={album.name}
          releasedate={album.release_date}
          titletrack={album.title_track}
        />
      ))}
      <p className="names">
        NAYEON | JEONGYEON | MOMO | SANA | JIHYO
        <br />
        MINA | DAHYUN | CHAEYOUNG | TZUYU
      </p>
    </div>
  );
};
export default App;
