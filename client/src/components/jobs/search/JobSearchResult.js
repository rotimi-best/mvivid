import React from "react";
import {
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
import "./css/index.css";

export default function JobSearchResult() {
  const jobs = [
    {
      id: 0,
      title: "Представитель компании, хостес",
      city: "Odesa",
      salary: "18700",
      description: "Привет! я HR компании GREY ADVERTISING ENTERPRISE, который безумно любит свою работу и хочет, чтобы ты любил свою! Мы приглашаем тебя на ...",
    },{
      id: 1,
      title: "Администратор хостела",
      city: "Odesa",
      salary: "7500",
      description: "В дружную команду DREAM Hostel Odessa требуется администратор рецепшена и администратор зала. Нам нужен очень ответственный, ...",
    },{
      id: 2,
      title: "Need a RecordRTC NodeJS expert for some consulting help",
      city: "Remote",
      salary: "750",
      description: "I need someone that has created solutions using the RecordRTC Library to record/encode/play videos from the main browsers ...",
    },
  ];

  return (
    <section className="d-flex flex-column">
      {
        jobs.map(job => (
          <Container className="SearchResultContainer">
            <Row className="SearchResultDecscription">
              <Col>
                <h3><a color="link" href={`/jobs/${job.id}`}>{job.title}</a></h3>
                <p>{job.description}</p>
              </Col>
            </Row>
            <Row className="SearchResultIcons">
              <Col className="location SearchResultIconCol">
                <i className="fas fa-street-view"></i>
                <p>{job.city}</p>
              </Col>
              <Col className="salary SearchResultIconCol">
                <i className="fas fa-dollar-sign"></i>
                <p>{job.salary}</p>
              </Col>
              <Col className="bookmark SearchResultIconCol">
                <i className="far fa-bookmark"></i>
                <p>Save</p>
              </Col>
            </Row>
          </Container>
        ))
      }
    </section>
  )
}