import React, { Fragment } from "react";
import FileGeneratorContainer from "./FileGeneratorContainer";

function FileGenerator() {

  const {
    loading,
    getReport,
    generateFile,
    report,
    downloadFile,
    fileInfo
  } = FileGeneratorContainer();

  return (
    <Fragment>
      <div className="container">
        <div>
          <button disabled={loading} onClick={generateFile} className="btn btn-dark">Generate</button>
        </div>
        <br />

        <div>
          <span>
            Link <a onClick={downloadFile} href='/#'>{fileInfo.fileName}</a>
          </span>
        </div>
        <br />

        <div>
          <button disabled={loading} onClick={getReport} className="btn btn-dark">Report</button>
        </div>
        <br />

        <div>
          <p>Alphabetical string: {report.alphanumaricStringCount}</p>
          <p>Real number: {report.realNumderCount}</p>
          <p>Integer: {report.integetCount}</p>
          <p>Alphanumeric: {report.alphanumaricCount}</p>
        </div>
      </div>
      <div>
        <h3>{loading && 'Loading ...'}</h3>
      </div>
    </Fragment>
  );
}

export default FileGenerator;
