import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function FileGenerator() {
  return (
    <Fragment>
      <div className="container">
        <div>
          <button className="btn btn-dark">Generate</button>
        </div>
        <br />

        <div>
          <span>
            Link <Link>File Name</Link>
          </span>
        </div>
        <br />

        <div>
          <button className="btn btn-dark">Report</button>
        </div>
        <br />

        <div>
          <p>Alphabetical string: 67</p>
          <p>Real number: 60</p>
          <p>Integer: 73</p>
          <p>Alphanumeric: 100</p>
        </div>
      </div>
    </Fragment>
  );
}

export default FileGenerator;
