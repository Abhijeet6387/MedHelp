import React from "react";

const Newsitem = ({
  title,
  description,
  imageUrl,
  newsUrl,
  author,
  date,
  source,
}) => {
  return (
    <div className="my-3">
      <div
        className="card"
        style={{
          boxShadow: " 8px 8px 15px 0px rgba(0,0,0,0.09)",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={imageUrl}
          className="card-img-top"
          style={{ height: "13rem", width: "100%", objectFit: "cover" }}
          alt="..."
        />
        <div
          className="card-header"
          style={{
            backgroundColor: "#333333",
            color: "white",
          }}
        >
          <h6>{title}...</h6>
        </div>
        <div className="card-body" style={{ color: "#000000" }}>
          {/* <p className="card-text">{description}...</p> */}
          <p className="card-text">
            <small className="text-danger">
              <p>
                {" "}
                By {!author ? "Unknown" : author} on <br />
                {new Date(date).toGMTString()}
              </p>
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-outline-dark"
            style={{ display: "block" }}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
