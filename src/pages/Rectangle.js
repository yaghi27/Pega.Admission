import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
export const Rectangle = (props) => {
  const { t } = useTranslation();
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  const rectStyle = {
    backgroundColor: "#e9edf4",
    marginLeft: matches ? "35%" : "2%",
    marginRight: "10%",
    width: matches ? "60%" : "90%",
    borderRadius: "1rem",
    color: "#016096",
    position: "absolute",
    bottom: "15px",
  };
  let incrementCount = () => {
    if (props.pageIndex === 0 && props.page1Next() === true)
      props.setPageIndex(props.pageIndex + 1);
    else if (props.pageIndex === 1 && props.page2Next() === true)
      props.setPageIndex(props.pageIndex + 1);
    else if (props.pageIndex === 2 && props.page3Next() === true)
      props.setPageIndex(props.pageIndex + 1);
    else if (props.pageIndex === 3) props.setPageIndex(props.pageIndex + 1);
    else if (props.pageIndex === 4 && props.Page5Next() === true)
      props.setPageIndex(props.pageIndex + 1);
  };

  let decrementCount = () => {
    if (props.pageIndex > 0) props.setPageIndex(props.pageIndex - 1);
  };
  let returnSubmit = () => {
    props.setPageIndex(5);
    props.setEdit(0);
  };
  return (
    <div style={rectStyle}>
      <div style={{ display: props.pageIndex === 5 ? "block" : "none" }}>
        <div
          style={{
            display: props.edit === 0 ? "none" : "inline-block",
            float: "right",
          }}
        >
          <div
            style={{
              display: "inline-block",
              float: "right",
              cursor: "pointer",
            }}
            onClick={returnSubmit}
          >
            <p
              style={{
                fontWeight: "bold",
                display: matches ? "inline-block" : "none",
              }}
            >
              {t("Summary")}
            </p>
            <span
              className="material-symbols-outlined"
              style={{
                position: "relative",
                top: "5px",
                display: "inline-block",
              }}
            >
              arrow_circle_right
            </span>
          </div>
        </div>
        <div
          style={{
            display: props.edit === 0 ? "inline-block" : "none",
            float: "right",
            padding: "1%",
            marginRight: "5%",
          }}
        >
          <div
            style={{
              display: "inline-block",
              float: "left",
              cursor: "pointer",
              backgroundColor: "white",
              paddingLeft: "30%",
              paddingRight: "30%",
              color: "#016096",
              border: "1px solid #016096",
              fontWeight: "bold",
            }}
          >
            {t("Submit")}
          </div>
        </div>
      </div>
      <div style={{ display: props.pageIndex === 5 ? "none" : "block" }}>
        <div style={{ display: props.edit === 0 ? "block" : "none" }}>
          <div
            style={{
              display: "inline-block",
              cursor: "pointer",
              opacity: props.pageIndex === 0 ? "0.5" : "1",
              marginLeft: "1%",
            }}
            onClick={decrementCount}
          >
            <img
              src={"https://pega.education/img/Arrow_previous_activated.svg"}
              style={{ display: matches ? "none" : "inline-block" }}
              alt=""
            ></img>
            <span
              className="material-symbols-outlined"
              style={{
                position: "relative",
                top: "5px",
                display: matches ? "inline-block" : "none",
              }}
            >
              arrow_circle_left
            </span>
            <p
              style={{
                fontWeight: "bold",
                display: matches ? "inline-block" : "none",
              }}
            >
              {t("Precedent")}
            </p>
          </div>
          <div
            style={{
              display: "inline-block",
              float: "right",
              cursor: "pointer",
              marginRight: "1%",
            }}
            onClick={incrementCount}
          >
            <p
              style={{
                fontWeight: "bold",
                display: matches ? "inline-block" : "none",
              }}
            >
              {t("Suivant")}
            </p>
            <span
              className="material-symbols-outlined"
              style={{
                position: "relative",
                top: "5px",
                display: matches ? "inline-block" : "none",
              }}
            >
              arrow_circle_right
            </span>
            <img
              src={"https://pega.education/img/Arrow_next_activated.svg"}
              style={{ display: matches ? "none" : "inline-block" }}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
