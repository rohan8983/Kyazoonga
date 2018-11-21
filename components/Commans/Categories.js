import React from "react";

export default function Categories(props) {
  return (
    <div className="col-sm-4 cat-box">
      <a href="#" className="block-link">
        <div className="cat-txt">
          <h3>{props.category.title}</h3>
        </div>
        <img src={props.category.src} alt="" className="img-full-width" />
      </a>
    </div>
  );
}
