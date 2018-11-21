import React from "react";
import Categories from "../Commans/Categories";

export default function CategoriesSection(props) {
  return (
    <section className="home-cat-sec text-center">
      <div className="container">
        <h2 className="site-title">Browse by top categories</h2>
        <div className="row">
          {props.categories.map((category, index) => {
            return <Categories category={category} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
}
