import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date,source} = this.props;

    return (
      <div className="card my-3">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:"1"}}>
          <span>{source}</span>
        </span>

        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p class="card-text">
            <small class="text-muted">
              by <strong>{author ? author : "Unknown"}</strong> on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
            Read More..
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItems;
