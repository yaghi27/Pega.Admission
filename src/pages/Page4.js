import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Row, Form, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
export const Page4 = (props) => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  const { t } = useTranslation();
  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  const Page4style = {
    marginLeft: matches ? "35%" : "0%",
    marginRight: "10%",
  };

  let handleCampus = (val) => {
    props.setCampus(val.target.value);
  };

  let handleSpec = (val) => {
    props.setSpec(val.target.value);
  };

  let handlePd = (val) => {
    props.setPd(val.target.value);
  };

  let handleSpec1 = (val) => {
    props.setSpec1(val.target.value);
  };

  let handleEy = (val) => {
    props.setEy(val.target.value);
  };

  let handlePc = (val) => {
    props.setPc2(val.target.value);
  };
  return (
    <Container style={Page4style}>
      <Row>
        <label
          className="introduction-KmuDLR"
          style={{
            fontWeight: "bold",
            top: "-1rem",
            marginLeft: "0rem",
            color: "#016096",
          }}
          id="titleNormalScreen"
        >
          {t("Academic")}
        </label>
      </Row>
      <Row style={{ display: "none" }}>
        <Col xs={8} md={8} lg={5}>
          <label
            style={{ opacity: "0.8" }}
            className="form-label niveau_academique"
          >
            {" "}
            Niveau Academique <span style={{ color: "red" }}>*</span>
          </label>
          <br />

          <Form.Select
            className="selectNiveau form-select col-12"
            aria-label="Default select example"
          >
            <option value="299">Seconde</option>
          </Form.Select>
          <span
            className="selectNiveau_errorfield"
            style={{
              //   display: campus === "" ? "block" : "none",
              display: "none",
              position: "absolute",
              color: "red",
            }}
          >
            {t("this field is required")}
          </span>
          <br />
        </Col>
      </Row>

      <Row>
        <Col xs={8} md={8} lg={5}>
          <label
            style={{ opacity: "0.8" }}
            className=" academic_campus form-label"
          >
            {" "}
            Campus
          </label>
          <br />

          <Form.Select
            className=" selectCampus form-select col-12"
            id="Campus"
            aria-label="Default select example"
            onChange={handleCampus}
          >
            <option defaultValue="">Campus</option>
            <option value="23">Ecole Ferrières</option>
            <option value="24">Ecole 89</option>
          </Form.Select>
          <span
            style={{
              display: props.campus === "" ? "block" : "none",
              position: "absolute",
              color: "red",
              fontSize: "0.7rem",
            }}
            className="selectCampus-errorfield error"
          >
            {t("this field is required")}
          </span>
          <br />
        </Col>
      </Row>
      <Row
        style={{
          display: props.campus === "23" ? "inline-block" : "none",
          marginBottom: "5%",
          width: "100%",
        }}
      >
        <Col xs={8} md={8} lg={5} style={{ marginTop: "1rem" }}>
          <label
            style={{ opacity: "0.8" }}
            className="form-label academic_admissionProgram"
          >
            {t("Spécialisation")}
            <span
              style={{ display: props.spec === "" ? "" : "none", color: "red" }}
            >
              *
            </span>
          </label>
          <Form.Select
            className=" selectAdmissionProgram form-select col-12"
            aria-label="Default select example"
            onChange={handleSpec}
          >
            <option
              defaultValue=""
              className="academic_selectAdmissionProgram"
              hidden=""
            >
              {t("Sélectionner Programme")}
            </option>
            <option value="8">Bachelor Ferrières</option>
            <option value="66">Programmes courts</option>
            <option value="65">MSc Ferrières</option>
            <option value="63">IBBA</option>
            <option value="64">Cursus Honorum</option>
          </Form.Select>
          <span
            className="selectAdmissionProgram_errorfield"
            style={{
              display: props.spec === "" ? "block" : "none",
              position: "absolute",
              color: "red",
              fontSize: "0.7rem",
            }}
          >
            {t("required")}
          </span>
        </Col>

        <Col xs={8} md={8} lg={5} style={{ marginTop: "2rem" }}>
          <label
            style={{ opacity: "0.8" }}
            className="form-label academic_startPeriod"
          >
            {t("Période de Début")} <span style={{ color: "red" }}>*</span>
          </label>

          <Form.Select
            className="selectStartPeriod form-select col-12"
            aria-label="Default select example"
          >
            <option hidden="" className="academic_selectPeriod">
              {t("Sélectionner la période de rentrée")}
            </option>
          </Form.Select>
          <span
            className="selectStartPeriod_errorfield"
            style={{
              visibility: "hidden",
              position: "absolute",
              top: "4rem",
              left: "1rem",
              color: "red",
              fontSize: "0.7rem",
            }}
          >
            {t("required")}
          </span>
        </Col>
      </Row>

      <Row
        style={{
          display: props.campus === "24" ? "inline-block" : "none",
          width: "100%",
        }}
      >
        <Col xs={8} md={8} lg={5} style={{ marginTop: "1rem" }}>
          <label
            style={{ opacity: "0.8" }}
            className="form-label academic_admissionProgram"
          >
            {t("Spécialisation")}
            <span
              style={{
                display: props.spec1 === "" ? "" : "none",
                color: "red",
              }}
            >
              *
            </span>
          </label>
          <Form.Select
            className="selectAdmissionProgram form-select col-12"
            aria-label="Default select example"
            onChange={handleSpec1}
          >
            <option defaultValue="">{t("Sélectionner Programme")}</option>
            <option value="68">Marketing</option>
            <option value="67">Programmation</option>
          </Form.Select>
          <span
            style={{
              display: props.spec1 === "" ? "" : "none",
              position: "absolute",
              color: "red",
              fontSze: "0.7rem",
            }}
            className="selectAdmissionProgram-errorfield"
          >
            {t("this field is required")}
          </span>
        </Col>

        <Col xs={8} md={8} lg={5} style={{ marginTop: "2rem" }}>
          <label
            style={{ opacity: "0.8" }}
            className="form-label academic_applicationGoal"
          >
            {t("Choix du programme")}
            <span
              style={{ display: props.pc === "" ? "" : "none", color: "red" }}
            >
              *
            </span>
          </label>

          <Form.Select
            className="selectApplicationGoal form-select col-12"
            aria-label="Default select example"
            onChange={handlePc}
          >
            <option defaultValue="">{t("Choix du programme")}</option>
            <option value="60">Bachelor</option>
            <option value="69">Mastère</option>
          </Form.Select>

          <span
            style={{
              display: props.pc === "" ? "block" : "none",
              position: "absolute",
              color: "red",
              fontSize: "0.7rem",
            }}
            className="selectApplicationGoal-errorfield"
          >
            {t("this field is required")}
          </span>
        </Col>
      </Row>
      <Row
        style={{
          display: props.campus === "24" ? "inline-block" : "none",
          marginBottom: "5%",
        }}
      >
        <Col xs={8} md={8} lg={5} style={{ marginTop: "2rem", width: "100%" }}>
          <label
            style={{ opacity: "0.8" }}
            className="form-label academic_programRoute"
          >
            {t("Année d’entrée")}
            <span
              style={{ display: props.ey === "" ? "" : "none", color: "red" }}
            >
              *
            </span>
          </label>

          <Form.Select
            onChange={handleEy}
            className="selectProgramRoute form-select col-12"
            aria-label="Default select example"
          >
            <option defaultValue="">{t("Année d’entrée")}</option>
            <option value="77">{t("Première Année")}</option>
            <option value="139">{t("Deuxième Année")} </option>
            <option value="79">{t("Troisième Année")} </option>
          </Form.Select>

          <span
            style={{
              display: props.ey === "" ? "block" : "none",
              visibility: "hidden",
              position: "absolute",
              top: "4rem",
              left: "1rem",
              color: "red",
              fontSize: "0.7rem",
            }}
            className="selectProgramRoute-errorfield"
          >
            {t("this field is required")}
          </span>
          <br />
        </Col>
      </Row>
    </Container>
  );
};
