import React from "react";
export const Step = (props) => {
  const stepStyle = {
    backgroundColor:
      props.pageIndex === props.stepNb - 1
        ? "white"
        : props.pageIndex > props.stepNb - 2
        ? "#f4f6f9"
        : "",
    display: "inline-block",
    width: "90%",
    borderRadius: "0.5rem",
    paddingTop: "1%",
    //margin: "-1%",
  };
  return (
    <div style={stepStyle}>
      <div
        style={{
          margin: "1%",
          float: "left",
          height: "25px",
          width: "25px",
          backgroundColor: props.pageIndex < props.stepNb ? "#555" : "#016096",
          color: "white",
        }}
      >
        {props.stepNb}
      </div>
      <label
        style={{
          fontSize: "20px",
          marginTop: "0.5%",
          float: "left",
          color: props.pageIndex < props.stepNb ? "#555" : "#016096",
        }}
      >
        {props.title}
      </label>
      <p
        style={{
          color: "red",
          display: props.pageIndex < props.stepNb ? "block" : "none",
          float: "right",
          paddingRight: "2%",
          fontSize: "15px",
        }}
      >
        *
      </p>
      <span
        style={{
          color: "#93d57b",
          display: props.pageIndex < props.stepNb ? "none" : "block",
          float: "right",
        }}
        className="material-symbols-outlined"
      >
        done
      </span>
    </div>
  );
};
