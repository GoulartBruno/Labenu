import React from "react";
import { Fragment } from "react";

export default function Description(props) {
  if (!props.description) return null;
  if (props.link) {
    return (
      <Fragment>
        <p> {props.description}</p>
        <p>
          <a href={props.link}>{props.link}</a>
        </p>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <p> {props.description}</p>
      </Fragment>
    );
  }
}
