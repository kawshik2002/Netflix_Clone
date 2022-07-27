import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

function Banner() {
  const [picture, setpicture] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setpicture(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  // console.log(picture);

  return (
    <header
      className="banner"
      style={{
        // objectFit: "contain",
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${picture?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/* background image */}
        {/* title */}
        <h1 className="banner__title">
          {picture?.title || picture?.name || picture?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        {/* div 2buttons */}
        <h1 className="banner__description">
          {truncate(picture?.overview, 150)}
        </h1>
        {/* description */}
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
