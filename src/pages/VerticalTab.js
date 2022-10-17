import React from "react";
import logo1 from "../logos/logo1.svg";
import logo2 from "../logos/logo2.png";
import logo3 from "../logos/logo3.png";
import logo4 from "../logos/logo4.png";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Step } from "./Step";
export const VerticalTab = (props) => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  const { t } = useTranslation();
  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  const VerticalTabStyle = {
    display: matches ? "" : "none",
    backgroundColor: "#E9EdF4",
    borderRadius: "1rem",
    height: "85%",
    minHeight: "800px",
    left: "0px",
    position: "absolute",
    top: "-1%",
    width: "25%",
    marginLeft: "5%",
    marginTop: "7.5%",
    zIndex: "1",
  };
  // const [width, setWindowWidth] = useState(0);
  // const updateDimensions = () => {
  //   const width = window.innerWidth;
  //   setWindowWidth(width);
  // };

  return (
    <div style={VerticalTabStyle}>
      <img
        src={logo1}
        alt=""
        style={{
          width: "35%",
          margin: "auto",
          display: "block",
          marginTop: "5%",
        }}
      ></img>
      <img
        src={logo2}
        alt=""
        style={{
          width: "35%",
          margin: "auto",
          marginTop: "10%",
          marginLeft: "10%",
          display: "inline-block",
          float: "left",
        }}
      ></img>
      <img
        src={logo3}
        alt=""
        style={{
          width: "35%",
          margin: "auto",
          marginTop: "10%",
          marginRight: "10%",
          display: "inline-block",
          float: "right",
        }}
      ></img>
      <img
        src={logo4}
        alt=""
        style={{
          width: "15%",
          margin: "auto",
          display: "block",
          marginTop: "35%",
          marginBottom: "15%",
        }}
      ></img>
      <div id="steps" style={{ textAlign: "center" }}>
        <Step title="Introduction" stepNb="1" pageIndex={props.pageIndex} />
        <Step title={t("Personal")} stepNb="2" pageIndex={props.pageIndex} />
        <Step title={t("Contact")} stepNb="3" pageIndex={props.pageIndex} />
        <Step title={t("Academic")} stepNb="4" pageIndex={props.pageIndex} />
        <Step title={t("Languages")} stepNb="5" pageIndex={props.pageIndex} />
        <Step title={t("Summary")} stepNb="6" pageIndex={props.pageIndex} />
      </div>
    </div>
  );
};
