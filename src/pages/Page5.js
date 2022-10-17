import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Row, Form, Col } from "react-bootstrap";
import { Button, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import axios from "axios";
export const Page5 = (props) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const [isHover1, setIsHover1] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHover1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHover1(false);
  };
  const { t } = useTranslation();
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  const Page5style = {
    marginLeft: matches ? "35%" : "0%",
    marginRight: "10%",
  };
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (nb) => {
    setShow(true);
    setCurrent(nb);
  };
  const [edit, setEdit] = useState(0);

  const [al, setAl] = useState(0);
  let addLanguage = () => {
    if (edit === 0) setAl(1);
  };
  let cancelAl = () => {
    setAl(0);
  };
  const [language, setLanguage] = useState("");
  const [level, setLevel] = useState("");

  let handleLanguage = (val) => {
    setLanguage(val.target.value);
  };
  let handleLevel = (val) => {
    setLevel(val.target.value);
  };

  function handleDelete() {
    const index = props.myLanguage.findIndex((el) => el.id === current);
    let newArray = [...props.myLanguage];
    newArray.splice(index, 1);
    props.setMylanguage(newArray);
    props.setNbl(props.nbl - 1);
    setShow(false);
  }
  let handleCheck = () => {
    if (language !== "" && level !== "") {
      props.setNbl(props.nbl + 1);
      setAl(0);
      let newLanguage = {
        id: props.nbl,
        language: language,
        level: level,
      };

      props.setMylanguage([...props.myLanguage, newLanguage]);
    } else {
      alert("Please select all the inputs");
    }
  };
  let handleEdit = (nb) => {
    setEdit(1);
    setCurrent(nb);
  };
  useEffect(() => {
    if (props.nbl > 0 && edit === 1) {
      const languages = [...props.myLanguage];
      const element = languages.find((el) => {
        return el.id === current;
      });
      //console.log(element);
      setLanguage(element.language);
      setLevel(element.level);
    }
  }, [edit]);
  let cancelEdit = () => {
    setEdit(0);
  };
  let handleChange = () => {
    if (language !== "" && level !== "") {
      let editedLanguage = {
        id: current,
        language: language,
        level: level,
      };
      const index = props.myLanguage.findIndex((el) => el.id === current);
      let newArray = [...props.myLanguage];
      newArray.splice(index, 1, editedLanguage);
      props.setMylanguage(newArray);
      setEdit(0);
    }
  };
  const axios = require("axios");
  const [langs, setLangs] = useState([]);
  function getLangs() {
    axios
      .get("https://api.pega.education/api/admission/languages")
      .then(function(response) {
        console.log(response.data);
        setLangs(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  const langsOptions = langs.map((data) => {
    return (
      <option value={data.language_name}>
        {t(data.language_name)}
        {/* {props.lang === "en" ? data.language_name : data.language_name_fr} */}
      </option>
    );
  });
  useEffect(() => {
    getLangs();
  }, []);
  return (
    <Container style={Page5style}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <span
              style={{ color: "red", textAlign: "center" }}
              className="material-symbols-outlined"
            >
              Warning
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this language?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Row
        id="page5main"
        style={{
          marginTop: "5%",
        }}
      >
        <Col xs={4} md={4} lg={4}>
          <label
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              color: "#016096",
              fontStyle: "normal",
            }}
          >
            {t("Languages")}
          </label>
        </Col>
        <Col xs={4} md={4} lg={4}>
          <div
            onClick={addLanguage}
            style={{
              cursor: "pointer",
              border: matches ? "3px solid #016096" : "",
              opacity: al === 1 ? "0.5" : edit === 1 ? "0.5" : "1",
              padding: "2%",
              borderRadius: "0.5rem",
              marginRight: "1.5%",
            }}
          >
            <label style={{ display: matches ? "" : "none", color: "#016096" }}>
              {t("addlanguage")}
            </label>
            <span
              style={{
                borderRadius: "50%",
                color: "white",
                backgroundColor: "#016096",
                float: "right",
              }}
              className="material-symbols-outlined"
            >
              add_circle
            </span>
          </div>
        </Col>
      </Row>
      <Row style={{ display: al === 1 ? "block" : "none" }}>
        <Col>
          <p>Language</p>
          <Form.Select onChange={handleLanguage} style={{ width: "50%" }}>
            <option defaultValue={""}></option>
            {langsOptions}
          </Form.Select>
        </Col>
        <Col>
          <p>{t("Proficiency")}</p>
          <Form.Select onChange={handleLevel} style={{ width: "50%" }}>
            <option defaultValue={""}></option>
            <option value="Beginner">{t("Beginner")}</option>
            <option value="Intermediate">{t("Intermediate")}</option>
            <option value="Expert">{t("Expert")}</option>
            <option value="Native">{t("Native")}</option>
          </Form.Select>
          <br />
          <span
            style={{
              display: matches ? "none" : "",
              cursor: "pointer",
              color: "red",
            }}
            onClick={cancelAl}
            className="material-symbols-outlined"
          >
            cancel
          </span>
          <Button
            onClick={cancelAl}
            style={{
              display: matches ? "" : "none",
              border: "1px solid #016096",
              color: isHover ? "white" : "#016096",
              backgroundColor: isHover ? "#016096" : "white",
              marginRight: "1%",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {t("Cancel")}
          </Button>
          <span
            onClick={handleCheck}
            style={{
              display: matches ? "none" : "",
              cursor: "pointer",
              color: "green",
            }}
            className="material-symbols-outlined"
          >
            check_circle
          </span>
          <Button
            onClick={handleCheck}
            style={{
              display: matches ? "" : "none",
              border: "1px solid #016096",
              color: isHover1 ? "white" : "#016096",
              backgroundColor: isHover1 ? "#016096" : "white",
            }}
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
          >
            {t("Save")}
          </Button>
        </Col>
      </Row>
      <Row style={{ display: edit === 1 ? "block" : "none" }}>
        <Col>
          <p>Language</p>
          <Form.Select
            value={language}
            onChange={handleLanguage}
            style={{ width: "50%" }}
          >
            <option defaultValue={""}></option>
            {langsOptions}
          </Form.Select>
        </Col>
        <Col>
          <p>Proficiency</p>
          <Form.Select
            value={level}
            onChange={handleLevel}
            style={{ width: "50%" }}
          >
            <option defaultValue={""}></option>
            <option value="Beginner">{t("Beginner")}</option>
            <option value="Intermediate">{t("Intermediate")}</option>
            <option value="Expert">{t("Expert")}</option>
            <option value="Native">{t("Native")}</option>
          </Form.Select>
          <br />
          <span
            style={{
              display: matches ? "none" : "",
              cursor: "pointer",
              color: "red",
            }}
            onClick={cancelEdit}
            className="material-symbols-outlined"
          >
            cancel
          </span>
          <Button
            onClick={cancelEdit}
            style={{
              display: matches ? "" : "none",
              border: "1px solid #016096",
              color: isHover ? "white" : "#016096",
              backgroundColor: isHover ? "#016096" : "white",
              marginRight: "1%",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {t("Cancel")}
          </Button>
          <span
            onClick={handleChange}
            style={{
              display: matches ? "none" : "",
              cursor: "pointer",
              color: "green",
            }}
            className="material-symbols-outlined"
          >
            check_circle
          </span>
          <Button
            onClick={handleChange}
            style={{
              display: matches ? "" : "none",
              border: "1px solid #016096",
              color: isHover1 ? "white" : "#016096",
              backgroundColor: isHover1 ? "#016096" : "white",
            }}
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
          >
            {t("Save")}
          </Button>
        </Col>
      </Row>
      <Row
        style={{
          display: al === 1 ? "none" : props.nbl === 0 ? "block" : "none",
        }}
      >
        <Col xs={8} md={8} lg={8}>
          <div
            style={{
              margin: "2%",
              backgroundColor: "rgb(247, 250, 255)",
              border: "1px solid rgb(224, 231, 255)",
              color: "grey",
              padding: "1%",
              borderRadius: "0.5rem",
            }}
          >
            <span style={{ color: "red" }}>!{"  "}</span>
            {t("Please add a language")}
          </div>
        </Col>
      </Row>
      <Row style={{ display: al === 1 ? "none" : edit === 1 ? "none" : "" }}>
        <Col xs={8} md={8} lg={8}>
          {props.myLanguage.slice(1).map((lang, index) => (
            <div
              style={{
                display: matches ? "" : "none",
                padding: "1%",
                margin: "1%",
                height:
                  props.nbl > 7
                    ? "13%"
                    : props.nbl > 4
                    ? "25%"
                    : props.nbl > 2
                    ? "50%"
                    : "100%",
                border: "1px solid black",
                borderRadius: "0.5rem",
              }}
              id={lang.id}
              key={lang.id}
            >
              <p style={{ opacity: "0.8", float: "left" }}>
                {t(lang.language)} | {t(lang.level)}
              </p>
              <div
                style={{
                  display: "inline",
                  float: "right",
                }}
              >
                <span
                  onClick={() => handleEdit(lang.id)}
                  style={{ cursor: "pointer" }}
                  className="material-symbols-outlined"
                >
                  edit
                </span>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => handleShow(lang.id)}
                  className="material-symbols-outlined"
                >
                  delete
                </span>
              </div>
            </div>
          ))}
          {props.myLanguage.slice(1).map((lang, index) => (
            <div
              style={{
                width: "150%",
                margin: "1%",
                display: matches ? "none" : "",
                boxShadow: "1px 2px 3px 4px rgba(20,20,20,0.4)",
                borderRadius: "1rem",
              }}
            >
              <div
                style={{
                  backgroundColor: "#e9edf4",
                  float: "left",
                  paddingLeft: "2%",
                }}
              >
                <p style={{ marginBottom: "380%", opacity: "0.8" }}>
                  {index + 1}
                </p>
                <span
                  onClick={() => handleEdit(lang.id)}
                  style={{ cursor: "pointer", color: "#016096" }}
                  className="material-symbols-outlined"
                >
                  edit
                </span>
              </div>
              <div style={{ backgroundColor: "white", marginLeft: "10%" }}>
                <span
                  style={{
                    cursor: "pointer",
                    float: "right",
                    color: "#016096",
                    marginRight: "10%",
                  }}
                  onClick={() => handleShow(lang.id)}
                  className="material-symbols-outlined"
                >
                  delete
                </span>
                <p style={{ fontWeight: "bold" }}>{index + 1}:</p>
                <p style={{ opacity: "0.8" }}>{t(lang.language)}</p>
                <p style={{ fontWeight: "bold" }}>Proficiency:</p>
                <p style={{ opacity: "0.8" }}>{t(lang.level)}</p>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
