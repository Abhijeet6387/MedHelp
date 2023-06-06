import React, { useEffect, useState } from "react";
import Newsitem from "./NewsItem";
import noimg from "../../images/noimg.png";
import { InfinitySpinner } from "react-loader-spinner";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    updateNews();
  }, [page]);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=5262dcace9d64898a8f2fe210a13eee7&pageSize=6&page=${page}`;
    setLoading(true);
    let data = await fetch(url);
    let apiData = await data.json();
    setArticles(apiData.articles);
    setTotalResults(apiData.totalResults);
    setLoading(false);
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  const handlePrevClick = () => {
    setPage(page - 1);
  };

  return (
    <div className="card container my-3">
      <div className="row">
        {!loading &&
          articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={
                    element.title
                      ? element.title.slice(0, 48)
                      : "Click on the Read More button below to know more"
                  }
                  description={
                    element.description
                      ? element.description.slice(0, 90)
                      : "Click on the Read More button below to get an insight of the news"
                  }
                  imageUrl={!element.urlToImage ? noimg : element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
      </div>
      <div
        className="container d-flex justify-content-between"
        style={{ marginBottom: 20 }}
      >
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-dark"
          onClick={handlePrevClick}
        >
          &larr; Previous
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
          type="button"
          className="btn btn-dark"
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default News;
