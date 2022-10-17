import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { Row, Form, Col, Container } from "react-bootstrap";
import axios from "axios";
export const Page2 = (props) => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  const Page2style = {
    marginLeft: matches ? "35%" : "0%",
    marginRight: "10%",
  };

  let handleTitle = (val) => {
    props.setTitle(val.target.value);
  };
  let handleFname = (val) => {
    props.setFname(val.target.value);
  };
  let handleMname = (val) => {
    props.setMname(val.target.value);
  };
  let handleLname = (val) => {
    props.setLname(val.target.value);
  };
  let handleNat = (val) => {
    props.setNat(val.target.value);
  };
  let handlePob = (val) => {
    props.setPob(val.target.value);
  };
  let handleCob = (val) => {
    props.setCob(val.target.value);
  };
  let handleEmail = (val) => {
    props.setEmail(val.target.value);
    // console.log(eemail);
  };
  let handleDob = (val) => {
    props.setDob(val.target.value);
  };
  const axios = require("axios");
  const [titles, setTitles] = useState([]);
  function getTitles() {
    axios
      .get("https://api.pega.education/api/admission/getTitles")
      .then(function(response) {
        setTitles(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  const titleOptions = titles.map((data) => {
    return <option value={data.value}>{t(data.value)}</option>;
  });

  const [nationalitites, setNationalitites] = useState([]);
  function getNationalitites() {
    axios
      .get("https://api.pega.education/api/admission/getNationalities")
      .then(function(response) {
        //console.log(response.data);
        setNationalitites(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  const nationalitiesOptions = nationalitites.map((data) => {
    return (
      <option value={data.name}>
        {props.lang === "en" ? data.name : data.name_fr}
      </option>
    );
  });

  const [countries, setCountries] = useState([]);
  function getCountries() {
    axios
      .get("https://api.pega.education/api/admission/getCountries")
      .then(function(response) {
        setCountries(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  const countriesOptions = countries.map((data) => {
    return (
      <option value={data.name}>
        {props.lang === "en" ? data.name : data.name_fr}
      </option>
    );
  });
  useEffect(() => {
    getTitles();
    getNationalitites();
    getCountries();
  }, []);
  return (
    <Container style={Page2style}>
      <Row>
        <label
          style={{
            fontWeight: "bold",
            color: "#016069",
            marginTop: "5%",
            fontSize: "20px",
            fontStyle: "normal",
          }}
        >
          {t("Personal")}
        </label>
      </Row>
      <Row>
        <Col xs={8} md={3} lg={2}>
          <label
            className="form-label personal_title"
            style={{ opacity: "0.8" }}
          >
            {" "}
            {t("Title")}
          </label>
          <br></br>

          <Form.Select
            value={props.title}
            className="selectTitle form-select col-md-3 col-sm-12"
            aria-label="Default select example"
            style={{ width: "100%" }}
            onChange={handleTitle}
          >
            <option defaultValue=""></option>
            {titleOptions}
          </Form.Select>
          <span
            className="selectTitle_errorfield"
            style={{
              display: props.title === "" ? "block" : "none",
              position: "absolute",
              fontSize: "0.9rem",
              color: "red",
            }}
          >
            {t("required")}
          </span>
          <br />
        </Col>
      </Row>
      <Row>
        <Col xs={8} md={3} lg={2}>
          <label
            style={{ opacity: "0.8" }}
            className="form-label personal_firstName"
          >
            {t("First Name")}
            <span
              style={{
                display: props.fname === "" ? "" : "none",
                color: "red",
              }}
            >
              *
            </span>
          </label>
          <input
            type="text"
            onChange={handleFname}
            value={props.fname}
            className="firstName form-control col-12"
          />
          <span
            style={{
              display: props.fname === "" ? "block" : "none",
              position: "absolute",
              color: "red",
              fontSize: "0.9rem",
            }}
          >
            {t("required")}
          </span>
          <br />
        </Col>
        <Col xs={8} md={3} lg={2}>
          <label
            style={{ opacity: "0.8" }}
            className="form-label personal_middleName"
          >
            {t("Middle Name")}
          </label>
          <span
            style={{
              display: props.mname === "" ? "" : "none",
              color: "red",
            }}
          >
            *
          </span>
          <input
            value={props.mname}
            className="middleName form-control"
            type="text"
            onChange={handleMname}
          />
          <span
            className="lastName_errorfield"
            style={{
              display: props.mname === "" ? "block" : "none",
              position: "absolute",
              color: "red",
              fontSize: "0.9rem",
            }}
          >
            {t("required")}
          </span>
          <br />
        </Col>
        <Col xs={8} md={3} lg={2}>
          <label
            style={{ opacity: "0.8" }}
            className="form-label personal_lastName"
          >
            {t("Last Name")}
            <span
              style={{
                color: "red",
                display: props.lname === "" ? "" : "none",
              }}
            >
              *
            </span>{" "}
          </label>
          <input
            value={props.lname}
            className="lastName form-control"
            type="text"
            onChange={handleLname}
          />
          <span
            className="lastName_errorfield"
            style={{
              display: props.lname === "" ? "block" : "none",
              position: "absolute",
              color: "red",
              fontSize: "0.9rem",
            }}
          >
            {t("required")}
          </span>
          <br />
        </Col>
      </Row>
      <Row>
        <Col xs={8} md={3} lg={2}>
          <label
            style={{ opacity: "0.8" }}
            className="form-label personal_nationality"
          >
            {t("Nationality")}
            <span
              style={{
                display: props.nat === "" ? "" : "none",
                color: "red",
              }}
            >
              *
            </span>
          </label>

          <Form.Select
            value={props.nat}
            className="nationality form-control col-12"
            aria-label="Default select example"
            onChange={handleNat}
          >
            <option defaultValue={""}></option>
            {nationalitiesOptions}
          </Form.Select>
          <span
            className="nationality_errorfield"
            style={{
              display: props.nat === "" ? "block" : "none",
              position: "absolute",
              color: "red",
              fontSize: "0.9rem",
            }}
          >
            {t("required")}
          </span>
          <br />
        </Col>

        <Col xs={8} md={3} lg={2}>
          <label
            style={{ opacity: "0.8" }}
            className="form-label personal_placeOfBirth"
          >
            {t("Place/Village Of Birth")}
            <span
              style={{
                display: props.pob === "" ? "" : "none",
                color: "red",
              }}
            >
              *
            </span>
          </label>
          <input
            value={props.pob}
            type="text"
            onChange={handlePob}
            className="placeOfBirth form-control col-12"
          />
          <span
            className="placeOfBirth_errorfield"
            style={{
              display: props.pob === "" ? "block" : "none",
              position: "absolute",
              color: "red",
              fontSize: "0.9rem",
            }}
          >
            {t("required")}
          </span>
          <br />
        </Col>

        <Col xs={8} md={3} lg={2}>
          <label
            style={{ opacity: "0.8" }}
            className="form-label personal_countryOfBirth"
          >
            {t("Country Of Birth")}
            <span
              style={{
                display: props.cob === "" ? "" : "none",
                color: "red",
              }}
            >
              *
            </span>
          </label>

          <Form.Select
            value={props.cob}
            className="countryOfBirth form-control col-12"
            aria-label="Default select example"
            onChange={handleCob}
          >
            <option defaultValue={""}></option>
            {countriesOptions}
          </Form.Select>

          <span
            className="countryOfBirth_errorfield"
            style={{
              display: props.cob === "" ? "block" : "none",
              position: "absolute",
              color: "red",
              fontSize: "0.9rem",
            }}
          >
            {t("required")}
          </span>
          <br />
        </Col>
      </Row>

      <Row style={{ marginBottom: "5%" }}>
        <Col xs={8} md={4} lg={4}>
          <label
            style={{ opacity: "0.8" }}
            className="form-label contact_email"
          >
            Email{" "}
            <span
              style={{
                diplay: props.eemail === "" ? "" : "none",
                color: "red",
              }}
            >
              *
            </span>
          </label>
          <input
            value={props.eemail}
            type="email"
            onChange={handleEmail}
            className=" email form-control col-12"
          />
          <span
            className="email_errorfield"
            style={{
              display: props.eemail === "" ? "block" : "none",
              position: "absolute",
              color: "red",
              fontSize: "0.7rem",
            }}
          >
            {t("required")}
          </span>
          <br />

          <span
            className="email_format_errorfield"
            style={{
              display:
                props.validateEmail(props.eemail) === false ? "" : "none",
              position: "absolute",
              color: " red",
              fontSize: "0.7rem",
            }}
          >
            invalid Format
          </span>
          <br />
          <span
            className="email_exists_errorfield"
            style={{
              display: "none",
              position: "absolute",
              color: "red",
              fontSize: "0.7rem",
            }}
          >
            email already exists
          </span>
        </Col>

        <Col xs={8} md={3} lg={2}>
          <label
            style={{ opacity: "0.8" }}
            className="form-label personal_dateOfBirth"
          >
            {t("Date Of Birth")}
            <span
              style={{
                display: props.dob === "" ? "" : "none",
                color: "red",
              }}
            >
              *
            </span>
          </label>
          <br />
          <input value={props.dob} onChange={handleDob} type="date" />
          <span
            className="dateOfBirth_errorfield"
            style={{
              display: props.dob === "" ? "block" : "none",
              position: "absolute",
              color: "red",
              fontSize: "0.9rem",
            }}
          >
            {t("required")}
          </span>
          <br />
        </Col>
      </Row>
      <Row style={{ marginBottom: matches ? "" : "10%" }}>
        <Col>
          <input style={{ float: "left" }} value="1" type="checkbox" />
          <label style={{ opacity: "0.8", marginLeft: "1%" }}>Parent</label>
        </Col>
      </Row>
    </Container>
  );
};
