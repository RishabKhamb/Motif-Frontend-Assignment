import React, { useEffect, useState } from "react";
// import Main from "./Main";

function FetchMail() {
  const [data, setData] = useState([]);
  //   const [ids, setIds] = useState();
  const [bod, setBod] = useState([]);

  useEffect(() => {
    apiGet();
  }, []);

  function apiGet() {
    fetch("https://6366339879b0914b75cba9c2.mockapi.io/api/email")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }

  function apiGetz(myId) {
    console.log(myId);
    let url = `https://6366339879b0914b75cba9c2.mockapi.io/api/email/${myId}`;
    console.log(url);
    // fetch()
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setBod(json);
    //   });
  }

  const setBodyHandler = (idz) => {
    apiGetz(idz);
  };
  //   console.log(bod);

  return (
    <>
      {apiGet &&
        data.map((data) => {
          return (
            <div
              key={data.id}
              onClick={() => {
                setBodyHandler(data.id);
              }}
              className="mail-item"
            >
              <div className="avatar-wrap">
                <div className="avatar">
                  <p>{data.from_name[0]}</p>
                </div>
              </div>
              <div className="detail-wrap">
                <p className="from">
                  From:{" "}
                  <span style={{ fontWeight: "500" }}>
                    {data.from_name}&nbsp; &lt;{data.from_email}&gt;
                  </span>
                </p>

                <p className="subject">
                  Subject:{" "}
                  <span style={{ fontWeight: "500" }}>{data.subject}</span>
                </p>

                <p className="short-description">{data.short_description}</p>

                <div className="other-details">
                  <p className="date" style={{ marginRight: "10px" }}>
                    26/02/2020
                  </p>
                  <p className="time">10:30am</p>
                </div>
              </div>
            </div>
          );
        })}
      <div>Hello</div>
    </>
  );
}

export default FetchMail;
