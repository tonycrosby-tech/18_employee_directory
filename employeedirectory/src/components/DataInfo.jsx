import React from "react";
import "../styles/DataInfo.css";

function DataInfo({ users }) {
  function DateNow(date) {
    const currentDate = date.split("-");
    const year = currentDate[0];
    const month = currentDate[1];
    const dayArray = currentDate[2].split("T");
    const day = dayArray[0];
    const expectedFormat = [month, day, year].join("-");
    return expectedFormat;
  }
  return (
    <tbody>
      {users[0] !== undefined && users[0].name !== undefined ? (
        users.map(({ login, name, picture, phone, email, dob }) => {
          return (
            <tr key={login.uuid}>
              <td data-th="Image" className="align-middle">
                <img
                  src={picture.medium}
                  alt={"Profile image for" + name.first + " " + name.last}
                  className="img-responsive"
                />
              </td>
              <td data-th="Name" className="name-cell align-middle">
                {name.first} {name.last}
              </td>
              <td data-th="Phone" className="align-middle">
                {phone}
              </td>
              <td data-th="Email" className="align-middle">
                <a href={"mailto:" + email} target="_blank" rel="noreferrer">
                  {email}
                </a>
              </td>
              <td data-th="DOB" className="align-middle">
                {DateNow(dob.date)}
              </td>
            </tr>
          );
        })
      ) : (
        <></>
      )}
    </tbody>
  );
}

export default DataInfo;
