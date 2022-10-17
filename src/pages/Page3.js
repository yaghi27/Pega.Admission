import React, { useEffect, useState } from "react";
import { PhoneInput } from "react-contact-number-input";
import { Container } from "react-bootstrap";
import { Row, Form, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import axios from "axios";
export const Page3 = (props) => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  const { t } = useTranslation();
  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  const Page3style = {
    marginLeft: matches ? "35%" : "0%",
    marginRight: "10%",
  };
  let handleIpn = (val) => {
    props.setIpn(val.phoneNumber);
  };
  let handleCn = (val) => {
    props.setCn(val.target.value);
  };
  let handleLts = (val) => {
    props.setLts(val.target.value);
  };
  let handleBn = (val) => {
    props.setBn(val.target.value);
  };
  let handleSn = (val) => {
    props.setSn(val.target.value);
  };
  let handleSl = (val) => {
    props.setSl(val.target.value);
  };
  let handleCity = (val) => {
    props.setCity(val.target.value);
  };
  let handlePc = (val) => {
    props.setPc(val.target.value);
  };
  const axios = require("axios");
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
    getCountries();
  }, []);
  return (
    <Container style={Page3style}>
      <Row>
        <label
          className="introduction-KmuDLR"
          style={{
            fontWeight: "bold",
            top: "-1rem",
            marginLeft: "1rem",
            color: "#016096",
          }}
          id="titleNormalScreen"
        >
          {t("Contact")}
        </label>
      </Row>
      <Row style={{ marginBottom: "0.3rem" }}>
        <Col xs={8} md={3} lg={4}>
          <label
            style={{ opacity: "0.8" }}
            className="form-label contact_countryName"
          >
            {t("Phone Number")}
            <span
              style={{ display: props.ipn === "" ? "" : "none", color: "red" }}
            >
              *
            </span>
          </label>
          <PhoneInput countryCode="fr" onChange={handleIpn} value={props.ipn} />
          <span
            className="selectTitle_errorfield"
            style={{
              display: props.ipn === "" ? "block" : "none",
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
      <Row style={{ marginBottom: "0.3rem" }}>
        <Col xs={8} md={3} lg={4}>
          <label
            style={{ opacity: "0.8" }}
            className="form-label contact_countryName"
          >
            {t("Country Name")}
            <span
              style={{ display: props.cn === "" ? "" : "none", color: "red" }}
            >
              *
            </span>
          </label>

          <Form.Select
            className="countryName form-select col-12"
            value={props.cn}
            aria-label="Default select example"
            onChange={handleCn}
          >
            <option defaultValue={""}></option>
            {countriesOptions}
          </Form.Select>
          <span
            className="countryName_errorfield"
            style={{
              display: props.cn === "" ? "block" : "none",
              position: "absolute",
              color: "red",
              fontSize: "0.7rem",
            }}
          >
            {t("required")}
          </span>
          <br />
        </Col>

        <Col xs={8} md={3} lg={4}>
          <label
            style={{ opacity: "0.8" }}
            className="form-label contact_localTimeZone"
          >
            {t("Local Time Zone")}
            <span
              style={{
                display: props.lts === "" ? "" : "none",
                color: "red",
              }}
            >
              *
            </span>
          </label>

          <Form.Select
            value={props.lts}
            className=" selectLocalTimeZone form-select col-12"
            aria-label="Default select example"
            onChange={handleLts}
          >
            <option defaultValue=""></option>
            <option value="Etc/GMT+12">
              (GMT-12:00) International Date Line West
            </option>
            <option value="Pacific/Midway">
              (GMT-11:00) Midway Island, Samoa
            </option>
            <option value="Pacific/Honolulu">(GMT-10:00) Hawaii</option>
            <option value="US/Alaska">(GMT-09:00) Alaska</option>
            <option value="America/Los_Angeles">
              (GMT-08:00) Pacific Time (US &amp; Canada)
            </option>
            <option value="America/Tijuana">
              (GMT-08:00) Tijuana, Baja California
            </option>
            <option value="US/Arizona">(GMT-07:00) Arizona</option>
            <option value="America/Chihuahua">
              (GMT-07:00) Chihuahua, La Paz, Mazatlan
            </option>
            <option value="US/Mountain">
              (GMT-07:00) Mountain Time (US &amp; Canada)
            </option>
            <option value="America/Managua">(GMT-06:00) Central America</option>
            <option value="US/Central">
              (GMT-06:00) Central Time (US &amp; Canada)
            </option>
            <option value="America/Mexico_City">
              (GMT-06:00) Guadalajara, Mexico City, Monterrey
            </option>
            <option value="Canada/Saskatchewan">
              (GMT-06:00) Saskatchewan
            </option>
            <option value="America/Bogota">
              (GMT-05:00) Bogota, Lima, Quito, Rio Branco
            </option>
            <option value="US/Eastern">
              (GMT-05:00) Eastern Time (US &amp; Canada)
            </option>
            <option value="US/East-Indiana">(GMT-05:00) Indiana (East)</option>
            <option value="Canada/Atlantic">
              (GMT-04:00) Atlantic Time (Canada)
            </option>
            <option value="America/Caracas">(GMT-04:00) Caracas, La Paz</option>
            <option value="America/Manaus">(GMT-04:00) Manaus</option>
            <option value="America/Santiago">(GMT-04:00) Santiago</option>
            <option value="Canada/Newfoundland">
              (GMT-03:30) Newfoundland
            </option>
            <option value="America/Sao_Paulo">(GMT-03:00) Brasilia</option>
            <option value="America/Argentina/Buenos_Aires">
              (GMT-03:00) Buenos Aires, Georgetown
            </option>
            <option value="America/Godthab">(GMT-03:00) Greenland</option>
            <option value="America/Montevideo">(GMT-03:00) Montevideo</option>
            <option value="America/Noronha">(GMT-02:00) Mid-Atlantic</option>
            <option value="Atlantic/Cape_Verde">
              (GMT-01:00) Cape Verde Is.
            </option>
            <option value="Atlantic/Azores">(GMT-01:00) Azores</option>
            <option value="Africa/Casablanca">
              (GMT+00:00) Casablanca, Monrovia, Reykjavik
            </option>
            <option value="Etc/Greenwich">
              (GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon,
              London
            </option>
            <option value="Europe/Amsterdam">
              (GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna
            </option>
            <option value="Europe/Belgrade">
              (GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague
            </option>
            <option value="Europe/Brussels">
              (GMT+01:00) Brussels, Copenhagen, Madrid, Paris
            </option>
            <option value="Europe/Sarajevo">
              (GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb
            </option>
            <option value="Africa/Lagos">
              (GMT+01:00) West Central Africa
            </option>
            <option value="Asia/Amman">(GMT+02:00) Amman</option>
            <option value="Europe/Athens">
              (GMT+02:00) Athens, Bucharest, Istanbul
            </option>
            <option value="Asia/Beirut">(GMT+02:00) Beirut</option>
            <option value="Africa/Cairo">(GMT+02:00) Cairo</option>
            <option value="Africa/Harare">(GMT+02:00) Harare, Pretoria</option>
            <option value="Europe/Helsinki">
              (GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius
            </option>
            <option value="Asia/Jerusalem">(GMT+02:00) Jerusalem</option>
            <option value="Europe/Minsk">(GMT+02:00) Minsk</option>
            <option value="Africa/Windhoek">(GMT+02:00) Windhoek</option>
            <option value="Asia/Kuwait">
              (GMT+03:00) Kuwait, Riyadh, Baghdad
            </option>
            <option value="Europe/Moscow">
              (GMT+03:00) Moscow, St. Petersburg, Volgograd
            </option>
            <option value="Africa/Nairobi">(GMT+03:00) Nairobi</option>
            <option value="Asia/Tbilisi">(GMT+03:00) Tbilisi</option>
            <option value="Asia/Tehran">(GMT+03:30) Tehran</option>
            <option value="Asia/Muscat">(GMT+04:00) Abu Dhabi, Muscat</option>
            <option value="Asia/Baku">(GMT+04:00) Baku</option>
            <option value="Asia/Yerevan">(GMT+04:00) Yerevan</option>
            <option value="Asia/Kabul">(GMT+04:30) Kabul</option>
            <option value="Asia/Yekaterinburg">
              (GMT+05:00) Yekaterinburg
            </option>
            <option value="Asia/Karachi">
              (GMT+05:00) Islamabad, Karachi, Tashkent
            </option>
            <option value="Asia/Calcutta">
              (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi
            </option>
            <option value="Asia/Calcutta">
              (GMT+05:30) Sri Jayawardenapura
            </option>
            <option value="Asia/Katmandu">(GMT+05:45) Kathmandu</option>
            <option value="Asia/Almaty">(GMT+06:00) Almaty, Novosibirsk</option>
            <option value="Asia/Dhaka">(GMT+06:00) Astana, Dhaka</option>
            <option value="Asia/Rangoon">(GMT+06:30) Yangon (Rangoon)</option>
            <option value="Asia/Bangkok">
              (GMT+07:00) Bangkok, Hanoi, Jakarta
            </option>
            <option value="Asia/Krasnoyarsk">(GMT+07:00) Krasnoyarsk</option>
            <option value="Asia/Hong_Kong">
              (GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi
            </option>
            <option value="Asia/Kuala_Lumpur">
              (GMT+08:00) Kuala Lumpur, Singapore
            </option>
            <option value="Asia/Irkutsk">
              (GMT+08:00) Irkutsk, Ulaan Bataar
            </option>
            <option value="Australia/Perth">(GMT+08:00) Perth</option>
            <option value="Asia/Taipei">(GMT+08:00) Taipei</option>
            <option value="Asia/Tokyo">
              (GMT+09:00) Osaka, Sapporo, Tokyo
            </option>
            <option value="Asia/Seoul">(GMT+09:00) Seoul</option>
            <option value="Asia/Yakutsk">(GMT+09:00) Yakutsk</option>
            <option value="Australia/Adelaide">(GMT+09:30) Adelaide</option>
            <option value="Australia/Darwin">(GMT+09:30) Darwin</option>
            <option value="Australia/Brisbane">(GMT+10:00) Brisbane</option>
            <option value="Australia/Canberra">
              (GMT+10:00) Canberra, Melbourne, Sydney
            </option>
            <option value="Australia/Hobart">(GMT+10:00) Hobart</option>
            <option value="Pacific/Guam">(GMT+10:00) Guam, Port Moresby</option>
            <option value="Asia/Vladivostok">(GMT+10:00) Vladivostok</option>
            <option value="Asia/Magadan">
              (GMT+11:00) Magadan, Solomon Is., New Caledonia
            </option>
            <option value="Pacific/Auckland">
              (GMT+12:00) Auckland, Wellington
            </option>
            <option value="Pacific/Fiji">
              (GMT+12:00) Fiji, Kamchatka, Marshall Is.
            </option>
            <option value="Pacific/Tongatapu">(GMT+13:00) Nuku'alofa</option>
          </Form.Select>
          <span
            className="localTimeZone_errorfield"
            style={{
              display: props.lts === "" ? "block" : "none",
              position: "absolute",
              color: "red",
              fontSize: "0.7rem",
            }}
          >
            {t("required")}
          </span>
          <br />
        </Col>
      </Row>

      <Row style={{ marginBottom: "0.3rem" }}>
        <Col xs={8} md={3} lg={4} style={{ display: "none" }}>
          <label
            style={{ opacity: "0.8" }}
            className="form-label contact_addressType"
          >
            Address Type <span style={{ color: "red" }}>*</span>
          </label>

          <Form.Select
            className=" selectAddressType form-select col-12"
            aria-label="Default select example"
          >
            <option
              className="franceDefault"
              value="France Default"
              defaultValue=""
            >
              France Default
            </option>
            <option className="generalAddress" value="General Address">
              General Address
            </option>
          </Form.Select>

          <span
            className="addressType_errorfield"
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
          <br />
        </Col>

        <Col xs={8} md={3} lg={4}>
          <label
            style={{ opacity: "0.8" }}
            className="form-label contact_buildingNumber"
          >
            {t("Building Number")}
          </label>
          <input
            type="text"
            value={props.bn}
            onChange={handleBn}
            className="form-control buildingNumber"
          />
          <span
            className="buildingNumber_errorfield"
            style={{
              display: props.bn === "" ? "block" : "none",
              position: "absolute",
              color: "red",
              fontSize: "0.7rem",
            }}
          >
            {t("required")}
          </span>
          <br />
        </Col>
      </Row>
      <Row style={{ marginBottom: "0.3rem" }}>
        <Col xs={8} md={3} lg={4}>
          <label
            style={{ opacity: "0.8" }}
            className="form-label contact_streetName"
          >
            {t("Street name")}
          </label>
          <input
            type="text"
            value={props.sn}
            onChange={handleSn}
            className="form-control streetName"
          />
          <span
            className="streetName_errorfield"
            style={{
              display: props.sn === "" ? "block" : "none",
              position: "absolute",
              color: "red",
              fontSize: "0.7rem",
            }}
          >
            {t("required")}
          </span>
          <br />
        </Col>

        <Col xs={8} md={3} lg={4}>
          <label
            style={{ opacity: "0.8" }}
            className="form-label contact_smallLocality"
          >
            {t("Small Locality")}
          </label>
          <input
            value={props.sl}
            onChange={handleSl}
            className="form-control smallLocality"
          />
          <span
            className="smallLocality_errorfield"
            style={{
              display: props.sl === "" ? "block" : "none",
              position: "absolute",
              color: "red",
              fontSize: "0.7rem",
            }}
          >
            {t("required")}
          </span>
          <br />
        </Col>
      </Row>

      <Row style={{ marginBottom: "5%" }}>
        <Col xs={8} md={3} lg={4}>
          <label style={{ opacity: "0.8" }} className="form-label contact_city">
            {t("City")}
            <span
              style={{
                display: props.city === "" ? "" : "none",
                color: "red",
              }}
            >
              *
            </span>
          </label>
          <input
            value={props.city}
            onChange={handleCity}
            className="form-control city"
          />
          <span
            className="city_errorfield"
            style={{
              display: props.city === "" ? "block" : "none",
              position: "absolute",
              color: "red",
              fontSize: "0.7rem",
            }}
          >
            {t("required")}
          </span>
          <br />
        </Col>
        <Col xs={8} md={3} lg={4}>
          <label
            style={{ opacity: "0.8" }}
            className="form-label contact_postalCode"
          >
            {t("Postal Code")}
          </label>
          <input
            value={props.pc}
            onChange={handlePc}
            type="number"
            className="form-control postalCode"
          />
          <span
            className="postalCode_errorfield"
            style={{
              display: props.pc === "" ? "block" : "none",
              position: "absolute",
              color: "red",
              fontSize: "0.7rem",
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
