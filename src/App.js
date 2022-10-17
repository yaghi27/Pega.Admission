import React, { useEffect, useState } from "react";
import { VerticalTab } from "./pages/VerticalTab";
import { Page1 } from "./pages/Page1";
import { Page2 } from "./pages/Page2";
import { Page3 } from "./pages/Page3";
import { Page4 } from "./pages/Page4";
import { Page5 } from "./pages/Page5";
import { Page6 } from "./pages/Page6";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import france from "./logos/french.png";
import british from "./logos/english.png";
import british2 from "./logos/british.jpg";
import france2 from "./logos/france.jpg";
import { Rectangle } from "./pages/Rectangle";
import i18n from "i18next";
function App() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  const [lang, setLang] = useState("en");
  let handleLang = () => {
    if (lang === "fr") {
      setLang("en");
      document.documentElement.setAttribute("lang", "en");
      i18n.changeLanguage("en");
    } else if (lang === "en") {
      setLang("fr");
      document.documentElement.setAttribute("lang", "fr");
      i18n.changeLanguage("fr");
    }
  };
  const divStyle = {
    //backgroundColor: "white",
    // borderRadius: "1rem",
  };
  const [pageIndex, setPageIndex] = useState(0);

  const [choice, setChoice] = useState("");
  function page1Next() {
    if (choice === "") return false;
    return true;
  }

  const [title, setTitle] = useState("");
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [nat, setNat] = useState("");
  const [pob, setPob] = useState("");
  const [cob, setCob] = useState("");
  const [eemail, setEmail] = useState("");
  const [dob, setDob] = useState("");
  function page2Next() {
    if (
      title === "" ||
      fname === "" ||
      mname === "" ||
      lname === "" ||
      nat === "" ||
      pob === "" ||
      cob === "" ||
      eemail === "" ||
      dob === "" ||
      validateEmail(eemail) === false
    )
      return false;
    return true;
  }
  const [ipn, setIpn] = useState("");
  const [cn, setCn] = useState("");
  const [lts, setLts] = useState("");
  const [bn, setBn] = useState("");
  const [sn, setSn] = useState("");
  const [sl, setSl] = useState("");
  const [city, setCity] = useState("");
  const [pc, setPc] = useState("");
  function page3Next() {
    if (
      ipn === "" ||
      cn === "" ||
      lts === "" ||
      bn === "" ||
      sn === "" ||
      sl === "" ||
      city === "" ||
      pc === ""
    )
      return false;
    return true;
  }
  const [nbl, setNbl] = useState(0);
  function Page5Next() {
    if (nbl > 0) return true;
    return false;
  }
  const [campus, setCampus] = useState("");
  const [pd, setPd] = useState("");
  const [spec1, setSpec1] = useState("");
  const [ey, setEy] = useState("");
  const [pc2, setPc2] = useState("");
  const [spec, setSpec] = useState("");
  const [myLanguage, setMylanguage] = useState([
    {
      id: "",
      language: "",
      level: "",
    },
  ]);
  const [edit, setEdit] = useState(0);
  const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  };
  return (
    <div style={divStyle}>
      <Navbar bg="light" style={{ marginBottom: "5%" }}>
        <Container>
          <Navbar.Brand style={{ display: matches ? "none" : "" }}>
            <pre
              style={{
                float: "left",
                color: pageIndex === 0 ? "#016096" : "#93d57b",
                textDecoration: pageIndex === 0 ? "underline" : "",
                textDecorationColor: pageIndex === 0 ? "#016096" : "",
                textDecorationThickness: pageIndex === 0 ? "10px" : "",
              }}
            >
              {" "}
              1{" "}
            </pre>
            <pre style={{ float: "left", opacity: "0.5" }}>|</pre>
            <pre
              style={{
                opacity: pageIndex < 1 ? "0.5" : "1",
                float: "left",
                color:
                  pageIndex > 1 ? "#93d57b" : pageIndex === 1 ? "#016096" : "",
                textDecoration: pageIndex === 1 ? "underline" : "",
                textDecorationColor: pageIndex === 1 ? "#016096" : "",
                textDecorationThickness: pageIndex === 1 ? "10px" : "",
              }}
            >
              {" "}
              2{" "}
            </pre>
            <pre style={{ float: "left", opacity: "0.5" }}>|</pre>
            <pre
              style={{
                opacity: pageIndex < 2 ? "0.5" : "1",
                float: "left",
                color:
                  pageIndex > 2 ? "#93d57b" : pageIndex === 2 ? "#016096" : "",
                textDecoration: pageIndex === 2 ? "underline" : "",
                textDecorationColor: pageIndex === 2 ? "#016096" : "",
                textDecorationThickness: pageIndex === 2 ? "10px" : "",
              }}
            >
              {" "}
              3{" "}
            </pre>
            <pre style={{ float: "left", opacity: "0.5" }}>|</pre>
            <pre
              style={{
                opacity: pageIndex < 3 ? "0.5" : "1",
                float: "left",
                color:
                  pageIndex > 3 ? "#93d57b" : pageIndex === 3 ? "#016096" : "",
                textDecoration: pageIndex === 3 ? "underline" : "",
                textDecorationColor: pageIndex === 3 ? "#016096" : "",
                textDecorationThickness: pageIndex === 3 ? "10px" : "",
              }}
            >
              {" "}
              4{" "}
            </pre>
            <pre style={{ float: "left", opacity: "0.5" }}>|</pre>
            <pre
              style={{
                opacity: pageIndex < 4 ? "0.5" : "1",
                float: "left",
                color:
                  pageIndex > 4 ? "#93d57b" : pageIndex === 4 ? "#016096" : "",
                textDecoration: pageIndex === 4 ? "underline" : "",
                textDecorationColor: pageIndex === 4 ? "#016096" : "",
                textDecorationThickness: pageIndex === 4 ? "10px" : "",
              }}
            >
              {" "}
              5{" "}
            </pre>
            <pre style={{ float: "left", opacity: "0.5" }}>|</pre>
            <pre
              style={{
                opacity: pageIndex < 5 ? "0.5" : "1",
                float: "left",
                color:
                  pageIndex > 5 ? "#93d57b" : pageIndex === 5 ? "#016096" : "",
                textDecoration: pageIndex === 5 ? "underline" : "",
                textDecorationColor: pageIndex === 5 ? "#016096" : "",
                textDecorationThickness: pageIndex === 5 ? "10px" : "",
              }}
            >
              {" "}
              6{" "}
            </pre>
            <pre style={{ float: "left", opacity: "0.5" }}>|</pre>
          </Navbar.Brand>
          <Navbar.Brand style={{ display: matches ? "" : "none" }}>
            <pre> </pre>
          </Navbar.Brand>
          <Navbar.Brand>
            <img
              alt=""
              onClick={handleLang}
              src={lang === "fr" ? france : british}
              style={{
                marginLeft: "300%",
                display: matches ? "" : "none",
                float: "right",
                borderRadius: "0.5rem",
                width: "70%",
                height: "70%",
                cursor: "pointer",
              }}
            />
            <img
              alt=""
              onClick={handleLang}
              src={lang === "fr" ? france2 : british2}
              style={{
                display: matches ? "none" : "",
                float: "right",
                borderRadius: "50%",
                height: "20px",
                width: "20px",
                cursor: "pointer",
              }}
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <VerticalTab pageIndex={pageIndex} />
      <div
        style={{
          backgroundColor: "white",
          paddingBottom: "2%",
          width: "96%",
          borderRadius: "1rem",
          position: "relative",
          marginLeft: "2%",
          minHeight: "700px",
          zIndex: "0",
          overflowX: "hidden",
        }}
      >
        {/* {(() => {
          if (edit === 0) {
            if (pageIndex === 0) {
              return <Page1 choice={choice} setChoice={setChoice} />;
            } else if (pageIndex === 1) {
              return (
                <Page2
                  title={title}
                  fname={fname}
                  lname={lname}
                  mname={mname}
                  nat={nat}
                  pob={pob}
                  cob={cob}
                  eemail={eemail}
                  dob={dob}
                  setTitle={setTitle}
                  setFname={setFname}
                  setLname={setLname}
                  setMname={setMname}
                  setNat={setNat}
                  setPob={setPob}
                  setCob={setCob}
                  setEmail={setEmail}
                  setDob={setDob}
                  validateEmail={validateEmail}
                  lang={lang}
                />
              );
            } else if (pageIndex === 2) {
              return (
                <Page3
                  ipn={ipn}
                  cn={cn}
                  lts={lts}
                  sn={sn}
                  bn={bn}
                  sl={sl}
                  city={city}
                  pc={pc}
                  setIpn={setIpn}
                  setCn={setCn}
                  setSn={setSn}
                  setLts={setLts}
                  setBn={setBn}
                  setSl={setSl}
                  setCity={setCity}
                  setPc={setPc}
                  lang={lang}
                />
              );
            } else if (pageIndex === 3) {
              return (
                <Page4
                  campus={campus}
                  pd={pd}
                  spec1={spec1}
                  ey={ey}
                  pc2={pc2}
                  spec={spec}
                  setCampus={setCampus}
                  setPd={setPd}
                  setSpec1={setSpec1}
                  setEy={setEy}
                  setPc2={setPc2}
                  setSpec={setSpec}
                />
              );
            } else if (pageIndex === 4) {
              return (
                <Page5
                  nbl={nbl}
                  setNbl={setNbl}
                  myLanguage={myLanguage}
                  setMylanguage={setMylanguage}
                  lang={lang}
                />
              );
            } else if (pageIndex === 5) {
              return (
                <Page6
                  choice={choice}
                  title={title}
                  fname={fname}
                  lname={lname}
                  mname={mname}
                  nat={nat}
                  pob={pob}
                  cob={cob}
                  eemail={eemail}
                  dob={dob}
                  ipn={ipn}
                  cn={cn}
                  lts={lts}
                  sn={sn}
                  bn={bn}
                  sl={sl}
                  city={city}
                  pc={pc}
                  campus={campus}
                  pd={pd}
                  spec1={spec1}
                  ey={ey}
                  pc2={pc2}
                  spec={spec}
                  myLanguage={myLanguage}
                  edit={edit}
                  setEdit={setEdit}
                />
              );
            }
          } else if (edit === 1) {
            return <Page1 choice={choice} setChoice={setChoice} />;
          } else if (edit === 2) {
            return (
              <Page2
                title={title}
                fname={fname}
                lname={lname}
                mname={mname}
                nat={nat}
                pob={pob}
                cob={cob}
                eemail={eemail}
                dob={dob}
                setTitle={setTitle}
                setFname={setFname}
                setLname={setLname}
                setMname={setMname}
                setNat={setNat}
                setPob={setPob}
                setCob={setCob}
                setEmail={setEmail}
                setDob={setDob}
                validateEmail={validateEmail}
                lang={lang}
              />
            );
          } else if (edit === 3) {
            return (
              <Page3
                ipn={ipn}
                cn={cn}
                lts={lts}
                sn={sn}
                bn={bn}
                sl={sl}
                city={city}
                pc={pc}
                setIpn={setIpn}
                setCn={setCn}
                setSn={setSn}
                setLts={setLts}
                setBn={setBn}
                setSl={setSl}
                setCity={setCity}
                setPc={setPc}
                lang={lang}
              />
            );
          } else if (edit === 4) {
            return (
              <Page4
                campus={campus}
                pd={pd}
                spec1={spec1}
                ey={ey}
                pc2={pc2}
                spec={spec}
                setCampus={setCampus}
                setPd={setPd}
                setSpec1={setSpec1}
                setEy={setEy}
                setPc2={setPc2}
                setSpec={setSpec}
              />
            );
          } else if (edit === 5) {
            return (
              <Page5
                nbl={nbl}
                setNbl={setNbl}
                myLanguage={myLanguage}
                setMylanguage={setMylanguage}
              />
            );
          }
        })()} */}
        <Page4
          campus={campus}
          pd={pd}
          spec1={spec1}
          ey={ey}
          pc2={pc2}
          spec={spec}
          setCampus={setCampus}
          setPd={setPd}
          setSpec1={setSpec1}
          setEy={setEy}
          setPc2={setPc2}
          setSpec={setSpec}
        />
        <Rectangle
          page1Next={page1Next}
          page2Next={page2Next}
          page3Next={page3Next}
          Page5Next={Page5Next}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
          edit={edit}
          setEdit={setEdit}
        />
      </div>
    </div>
  );
}

export default App;
