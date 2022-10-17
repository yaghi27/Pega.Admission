import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Row, Form, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import axios from "axios";
export const Page1 = (props) => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  const Page1style = {
    marginLeft: matches ? "35%" : "0%",
    marginRight: "10%",
  };
  let handleChoice = (val) => {
    props.setChoice(val.target.value);
  };
  const { t } = useTranslation();
  const axios = require("axios");
  const [answers, setAnswers] = useState([]);

  function getAnswers() {
    axios
      .get("https://api.pega.education/api/admission/getAnswers")
      .then(function(response) {
        setAnswers(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  useEffect(() => {
    getAnswers();
  }, []);
  const arr = answers.map((data) => {
    return <option value={data.value}>{t(data.value)}</option>;
  });
  return (
    <Container style={Page1style}>
      <Row>
        <label
          style={{
            fontWeight: "bold",
            marginTop: "5%",
            fontSize: "20px",
            color: "#016096",
            fontStyle: "normal",
          }}
        >
          Introduction
        </label>
      </Row>
      <Row>
        <Col xs={8} md={8} lg={8}>
          <p
            style={{ textIndent: "3em", marginBottom: "10%", fontSize: "15px" }}
          >
            {t("welcome to acelis")}
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={8} md={8} lg={8}>
          <p style={{ opacity: "0.8" }}>{t("findout")}</p>
          <Form.Select
            // style={{ marginBottom: "5%" }}
            className="form-select"
            id="inputGroupSelect01"
            onChange={handleChoice}
            value={props.choice}
          >
            <option defaultValue={""}></option>
            {arr}
          </Form.Select>
          <br />
          <span
            className="selectChoice_errorfield"
            style={{
              display: props.choice === "" ? "block" : "none",
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
    </Container>
  );
};
