import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
export const Page6 = (props) => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  const { t } = useTranslation();
  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  const Page6style = {
    marginLeft: matches ? "35%" : "0%",
    marginRight: "10%",
  };
  let handleEdit = (index) => {
    props.setEdit(index);
  };

  return (
    <Container style={Page6style}>
      <Row style={{ marginBottom: "0.5%" }}>
        <label
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "#016096",
            fontStyle: "normal",
          }}
        >
          {t("Summary")}
        </label>
      </Row>
      <Row
        style={{
          display: matches ? "" : "none",
          marginBottom: "0.5%",
          width: "100%",
          backgroundColor: " #e9edf4",
        }}
      >
        <label style={{ width: "30%", fontWeight: "bold", opacity: "0.7" }}>
          Introduction
        </label>
        <div
          style={{
            position: "absolute",
            right: "30px",
            width: "auto",
          }}
        >
          <span
            style={{
              cursor: "pointer",
              color: "green",
            }}
            className="material-symbols-outlined"
          >
            check_circle
          </span>
          <span
            style={{ cursor: "pointer" }}
            className="material-symbols-outlined"
            onClick={() => handleEdit(1)}
          >
            edit
          </span>
        </div>
      </Row>
      <Row
        style={{
          display: matches ? "" : "none",
          marginBottom: "0.5%",
          opacity: "0.7",
        }}
      >
        Reference: {t(props.choice)}
      </Row>
      <Row
        style={{
          display: matches ? "" : "none",
          marginBottom: "0.5%",
          width: "100%",
          backgroundColor: " #e9edf4",
        }}
      >
        <label style={{ width: "30%", fontWeight: "bold", opacity: "0.7" }}>
          {t("Personal")}
        </label>
        <div
          style={{
            position: "absolute",
            right: "30px",
            width: "auto",
          }}
        >
          <span
            style={{
              cursor: "pointer",
              color: "green",
            }}
            className="material-symbols-outlined"
          >
            check_circle
          </span>
          <span
            style={{ cursor: "pointer" }}
            className="material-symbols-outlined"
            onClick={() => handleEdit(2)}
          >
            edit
          </span>
        </div>
      </Row>
      <Row
        style={{
          display: matches ? "" : "none",
          marginBottom: "0.5%",
          opacity: "0.7",
        }}
      >
        {t("Title")}: {t(props.title)}
      </Row>
      <Row
        style={{
          display: matches ? "" : "none",
          marginBottom: "0.5%",
          opacity: "0.7",
        }}
      >
        {t("First Name")} {t("Last Name")}: {props.fname} {props.lname}
      </Row>
      <Row
        style={{
          display: matches ? "" : "none",
          marginBottom: "0.5%",
          opacity: "0.7",
        }}
      >
        Email: {props.eemail}
      </Row>
      <Row
        style={{
          display: matches ? "" : "none",
          marginBottom: "0.5%",
          opacity: "0.7",
        }}
      >
        {t("Date Of Birth")}: {props.dob}
      </Row>
      <Row
        style={{
          display: matches ? "" : "none",
          marginBottom: "0.5%",
          opacity: "0.7",
        }}
      >
        {t("Nationality")}: {props.nat}
      </Row>
      <Row
        style={{
          display: matches ? "" : "none",
          marginBottom: "0.5%",
          opacity: "0.7",
        }}
      >
        {t("Place/Village Of Birth")}: {props.pob}
      </Row>
      <Row
        style={{
          display: matches ? "" : "none",
          marginBottom: "0.5%",
          opacity: "0.7",
        }}
      >
        {t("Country Of Birth")}: {props.cob}
      </Row>
      <Row
        style={{
          display: matches ? "" : "none",
          marginBottom: "0.5%",
          width: "100%",
          backgroundColor: " #e9edf4",
        }}
      >
        <label style={{ width: "30%", fontWeight: "bold", opacity: "0.7" }}>
          {t("Contact")}
        </label>
        <div
          style={{
            position: "absolute",
            right: "30px",
            width: "auto",
          }}
        >
          <span
            style={{
              cursor: "pointer",
              color: "green",
            }}
            className="material-symbols-outlined"
          >
            check_circle
          </span>
          <span
            style={{ cursor: "pointer" }}
            className="material-symbols-outlined"
            onClick={() => handleEdit(3)}
          >
            edit
          </span>
        </div>
      </Row>
      <Row
        style={{
          display: matches ? "" : "none",
          marginBottom: "0.5%",
          opacity: "0.7",
        }}
      >
        Telephone number: {props.ipn}
      </Row>
      <Row
        style={{
          display: matches ? "" : "none",
          marginBottom: "0.5%",
          opacity: "0.7",
        }}
      >
        {t("Country Name")}: {props.cn}
      </Row>
      <Row
        style={{
          display: matches ? "" : "none",
          marginBottom: "0.5%",
          opacity: "0.7",
        }}
      >
        {t("Local Time Zone")}: {props.lts}
      </Row>
      <Row
        style={{
          display: matches ? "" : "none",
          marginBottom: "0.5%",
          opacity: "0.7",
        }}
      >
        {t("Building Number")}: {props.bn}
      </Row>
      <Row
        style={{
          display: matches ? "" : "none",
          marginBottom: "0.5%",
          opacity: "0.7",
        }}
      >
        {t("Street name")}: {props.sn}
      </Row>
      <Row
        style={{
          display: matches ? "" : "none",
          marginBottom: "0.5%",
          opacity: "0.7",
        }}
      >
        {t("Small locality")}: {props.sl}
      </Row>
      <Row
        style={{
          display: matches ? "" : "none",
          marginBottom: "0.5%",
          opacity: "0.7",
        }}
      >
        {t("City")}: {props.city}
      </Row>
      <Row
        style={{
          display: matches ? "" : "none",
          marginBottom: "0.5%",
          opacity: "0.7",
        }}
      >
        {t("Postal Code")}: {props.pc}
      </Row>
      <Row
        style={{
          display: matches ? "" : "none",
          marginBottom: "0.5%",
          width: "100%",
          backgroundColor: " #e9edf4",
        }}
      >
        <label style={{ width: "30%", fontWeight: "bold", opacity: "0.7" }}>
          {t("Academic")}
        </label>
        <div
          style={{
            position: "absolute",
            right: "30px",
            width: "auto",
          }}
        >
          <span
            style={{
              cursor: "pointer",
              color: "green",
            }}
            className="material-symbols-outlined"
          >
            check_circle
          </span>
          <span
            style={{ cursor: "pointer" }}
            className="material-symbols-outlined"
            onClick={() => handleEdit(4)}
          >
            edit
          </span>
        </div>
      </Row>
      <Row
        style={{
          display: matches ? "" : "none",
          marginBottom: "0.5%",
          opacity: "0.7",
        }}
      >
        Campus: {props.campus}
      </Row>
      <Row
        style={{
          display: matches ? "" : "none",
          marginBottom: "0.5%",
          width: "100%",
          backgroundColor: " #e9edf4",
        }}
      >
        <label style={{ width: "30%", fontWeight: "bold", opacity: "0.7" }}>
          {t("Languages")}
        </label>
        <div
          style={{
            position: "absolute",
            right: "30px",
            width: "auto",
          }}
        >
          <span
            style={{
              cursor: "pointer",
              color: "green",
            }}
            className="material-symbols-outlined"
          >
            check_circle
          </span>
          <span
            style={{ cursor: "pointer" }}
            className="material-symbols-outlined"
            onClick={() => handleEdit(5)}
          >
            edit
          </span>
        </div>
      </Row>
      {props.myLanguage.slice(1).map((lang, index) => (
        <Row
          style={{
            display: matches ? "" : "none",
            marginBottom: "0.5%",
            opacity: "0.7",
          }}
        >
          {index + 1} Language: {t(lang.language)}
        </Row>
      ))}
      <Row
        style={{
          boxShadow: "1px 2px 3px 4px rgba(20,20,20,0.4)",
          borderRadius: "1rem",
          display: matches ? "none" : "",
        }}
      >
        <Col xs={1} md={1} style={{ backgroundColor: "#e9edf4" }}>
          <p style={{ marginTop: "1000%", transform: "rotate(270deg)" }}>
            Admisson
          </p>
          <span
            style={{ cursor: "pointer", color: "#016096" }}
            className="material-symbols-outlined"
            onClick={() => handleEdit(1)}
          >
            edit
          </span>
        </Col>
        <Col xs={9} md={9} style={{ backgroundColor: "white" }}>
          <label style={{ fontWeight: "bold" }}>Reference: </label>
          <br />
          <label style={{ opacity: "0.8" }}>{t(props.choice)}</label>
        </Col>
      </Row>
      <Row
        style={{
          boxShadow: "1px 2px 3px 4px rgba(20,20,20,0.4)",
          borderRadius: "1rem",
          display: matches ? "none" : "",
          marginTop: "1%",
        }}
      >
        <Col xs={1} md={1} style={{ backgroundColor: "#e9edf4" }}>
          <p
            style={{
              marginTop: "1000%",
              transform: "rotate(270deg)",
            }}
          >
            {t("Personal")}
          </p>

          <span
            style={{ cursor: "pointer", color: "#016096" }}
            className="material-symbols-outlined"
            onClick={() => handleEdit(2)}
          >
            edit
          </span>
        </Col>
        <Col xs={9} md={9} style={{ backgroundColor: "white" }}>
          <label style={{ fontWeight: "bold" }}>{t("Title")}:</label>
          <br />
          <label style={{ opacity: "0.8" }}>{t(props.title)}</label>
          <br />
          <label style={{ fontWeight: "bold" }}>
            {t("First Name")} {t("Last Name")}:
          </label>
          <br />
          <label style={{ opacity: "0.8" }}>
            {props.fname} {props.lname}
          </label>
          <br />
          <label style={{ fontWeight: "bold" }}>Email:</label>
          <br />
          <label style={{ opacity: "0.8" }}>{props.eemail}</label>
          <br />
          <label style={{ fontWeight: "bold" }}>{t("Date Of Birth")}:</label>
          <br />
          <label style={{ opacity: "0.8" }}>{props.dob}</label>
          <br />
          <label style={{ fontWeight: "bold" }}>{t("Nationality")}:</label>
          <br />
          <label style={{ opacity: "0.8" }}>{props.nat}</label>
          <br />
          <label style={{ fontWeight: "bold" }}>
            {t("Place/Village Of Birth")}:
          </label>
          <br />
          <label style={{ opacity: "0.8" }}>{props.pob}</label>
          <br />
          <label style={{ fontWeight: "bold" }}>{t("Country Of Birth")}:</label>
          <br />
          <label style={{ opacity: "0.8" }}>{props.cob}</label>
          <br />
        </Col>
      </Row>
      <Row
        style={{
          boxShadow: "1px 2px 3px 4px rgba(20,20,20,0.4)",
          borderRadius: "1rem",
          display: matches ? "none" : "",
          marginTop: "1%",
        }}
      >
        <Col xs={1} md={1} style={{ backgroundColor: "#e9edf4" }}>
          <p
            style={{
              marginTop: "1000%",
              transform: "rotate(270deg)",
            }}
          >
            {t("Contact")}
          </p>

          <span
            style={{ cursor: "pointer", color: "#016096" }}
            className="material-symbols-outlined"
            onClick={() => handleEdit(3)}
          >
            edit
          </span>
        </Col>
        <Col xs={9} md={9} style={{ backgroundColor: "white" }}>
          <label style={{ fontWeight: "bold" }}>Telephone number::</label>
          <br />
          <label style={{ opacity: "0.8" }}>{props.ipn}</label>
          <br />
          <label style={{ fontWeight: "bold" }}>{t("Country Name")}:</label>
          <br />
          <label style={{ opacity: "0.8" }}>{props.cn}</label>
          <br />
          <label style={{ fontWeight: "bold" }}>{t("Local Time Zone")}:</label>
          <br />
          <label style={{ opacity: "0.8" }}>{props.lts}</label>
          <br />
          <label style={{ fontWeight: "bold" }}>{t("Building Number")}:</label>
          <br />
          <label style={{ opacity: "0.8" }}>{props.bn}</label>
          <br />
          <label style={{ fontWeight: "bold" }}>{t("Street name")}: </label>
          <br />
          <label style={{ opacity: "0.8" }}>{props.sn}</label>
          <br />
          <label style={{ fontWeight: "bold" }}>{t("Small locality")}: </label>
          <br />
          <label style={{ opacity: "0.8" }}>{props.sl}</label>
          <br />
          <label style={{ fontWeight: "bold" }}>{t("City")}:</label>
          <br />
          <label style={{ opacity: "0.8" }}>{props.city}</label>
          <br />
          <label style={{ fontWeight: "bold" }}>{t("Postal Code")}:</label>
          <br />
          <label style={{ opacity: "0.8" }}>{props.pc}</label>
          <br />
        </Col>
      </Row>
      <Row
        style={{
          marginTop: "1%",
          boxShadow: "1px 2px 3px 4px rgba(20,20,20,0.4)",
          borderRadius: "1rem",
          display: matches ? "none" : "",
        }}
      >
        <Col xs={1} md={1} style={{ backgroundColor: "#e9edf4" }}>
          <p style={{ marginTop: "1000%", transform: "rotate(270deg)" }}>
            {t("Academic")}
          </p>

          <span
            style={{ cursor: "pointer", color: "#016096" }}
            className="material-symbols-outlined"
            onClick={() => handleEdit(4)}
          >
            edit
          </span>
        </Col>
        <Col xs={9} md={9} style={{ backgroundColor: "white" }}>
          <label style={{ fontWeight: "bold" }}>Campus: </label>
          <br />
          <label style={{ opacity: "0.8" }}>{props.campus}</label>
        </Col>
      </Row>
      <Row
        style={{
          marginTop: "1%",
          boxShadow: "1px 2px 3px 4px rgba(20,20,20,0.4)",
          borderRadius: "1rem",
          display: matches ? "none" : "",
        }}
      >
        <Col xs={1} md={1} style={{ backgroundColor: "#e9edf4" }}>
          <p style={{ marginTop: "1000%", transform: "rotate(270deg)" }}>
            {t("Languages")}
          </p>

          <span
            style={{ cursor: "pointer", color: "#016096" }}
            className="material-symbols-outlined"
            onClick={() => handleEdit(5)}
          >
            edit
          </span>
        </Col>
        <Col xs={9} md={9} style={{ backgroundColor: "white" }}>
          {props.myLanguage.slice(1).map((lang, index) => (
            <div>
              <label style={{ fontWeight: "bold" }}>
                {t("Language")} {index + 1}:
              </label>
              <br />
              <label style={{ opacity: "0.8" }}>
                {t(lang.language)} | {t(lang.level)}
              </label>
              <br />
            </div>
          ))}
        </Col>
      </Row>
      <Row style={{ marginBottom: matches ? "5%" : "15%" }}></Row>
    </Container>
  );
};
