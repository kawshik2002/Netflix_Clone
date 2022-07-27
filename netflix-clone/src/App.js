import React, { useEffect, useState } from "react";

import axios from "axios";
// import instance from "./axios"
import requests from "./requests";
import Row from "./Row";
import Banner from "./Banner";
import NavBar from "./Navbar";
import "./App.css";
// const base_url = "https://image.tmdb.org/t/p/original/";

// https://logo.tmdb.org/t/p/original/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg

// https://logo.tmdb.org/t/p/w500/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg
function Clone() {
  // const [source, setsource] = useState([])

  // const [name, setname] = useState([])
  // // Api key=3aa2f957e3c34d47862183447112e357

  // useEffect(() => {

  //   axios.get(" https://api.themoviedb.org/3/movie/550?api_key=3aa2f957e3c34d47862183447112e357").then((response) => {
  //     setname(response.data.production_companies);
  //     // setsource(response.data)
  //     console.log(response.data)
  //     // console.log(`${base_url}${response.data.poster_path}`)

  //   })
  // }, [])

  return (
    <div className="app">
      <NavBar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        islargerow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default Clone;

// https://api.themoviedb.org/3/movie/550?api_key=3aa2f957e3c34d47862183447112e357
