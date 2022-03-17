import React, { Fragment } from "react";
import FileGenerator from "./FileGenerator";

function HomePage() {
  return (
    <Fragment>
      <div className="jumbotron">
        <h1>Omnilytics Challenge</h1>
        <p>Hi there, this is the web app for Omnilytics Challenge.</p>
      </div>
      <FileGenerator/>
    </Fragment>
  );
}

export default HomePage;
