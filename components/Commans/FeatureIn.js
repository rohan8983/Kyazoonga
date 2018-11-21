import React from "react";

export default function FeatureIn(props) {
  return (
    <a target="_blank" href={props.item.href}>
      <img src={props.item.src} alt={props.item.alt} />
    </a>
  );
}
