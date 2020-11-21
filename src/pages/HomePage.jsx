import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import List from "../components/List/List";
import Panel from "../components/Panel/Panel";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [selectedMeeting, setSelectedMeeting] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://react-challenge-api.herokuapp.com/first-challenge/episodes/"
      )
      .then((result) => {
        setData(result.data);
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleOnClickMeeting = (meetingId) => {
    axios
      .get(
        `https://react-challenge-api.herokuapp.com/first-challenge/episodes/${meetingId}`
      )
      .then((result) => {
        setSelectedMeeting(result.data);
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>REACT DAILY CHAT ALTERADO</h1>
      <Container fluid>
        <Row>
          <Col md={{ span: 8, offset: 2 }} xs={12}>
            <Row>
              <Col md={5} xs={12}>
                <List
                  meetingList={data}
                  handleOnClick={handleOnClickMeeting}
                  title="Encontros"
                />
              </Col>
              <Col md={7} xs={12}>
                <Panel selectedMeeting={selectedMeeting} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
