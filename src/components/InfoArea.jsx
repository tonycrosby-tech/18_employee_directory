import React from "react";
import DataInfo from "./DataInfo";
import "../styles/InfoArea.css";

function InfoArea({ headings, users, handleSort }) {
  return (
    <div className="infoarea">
      <table
        id="table"
        className="table table-striped table-hover table-condensed"
      >
        <thead>
          <tr>
            {headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={width}
                  onClick={() => {
                    handleSort(name.toLowerCase());
                  }}
                >
                  {name} <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>
        <DataInfo users={users} />
      </table>
    </div>
  );
}

export default InfoArea;