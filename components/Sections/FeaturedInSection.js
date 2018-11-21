import React from "react";
import FeatureIn from "../Commans/FeatureIn";

export default function FeaturedInSection(props) {
  return (
    <section className="home-featured-sec text-center">
      <h2 className="site-title">
        <span>We've been featured in</span>
      </h2>
      <div className="container-fluid">
        {props.featuredIn.map((item, index) => {
          return <FeatureIn item={item} key={index} />;
        })}
      </div>
    </section>
  );
}
