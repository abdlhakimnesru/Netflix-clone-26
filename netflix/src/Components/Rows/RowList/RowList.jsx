

import React from "react";
import Row from "../Row/Row";
import "./RowList.css";
import requests from "../../../utiles/request";

const RowList = () => {
  return (
    <>
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
      />

      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRatedMovies}
      />

      <Row
        title="Action & Adventure"
        fetchUrl={requests.fetchActionMovies}
      />
    </>
  );
};

export default RowList;