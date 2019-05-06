import React, { useState } from 'react';
import { 
  Container
} from "reactstrap";
import AnswerQuestion from "./AnswerQuestion";
import AskQuestion from "./AskQuestion";
import Question from "./Question";
import Answer from "./Answer";
import "./index.css";

export default function PeopleProfile() {
  const [openModal, setOpenModal] = useState(false);
  const [forumContent, setForumContent] = useState({
    question: {
      username: "Anton Osatyk",
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officia eveniet molestias facilis tempore doloremque voluptates, possimus mollitia optio laudantium?"
    },
    answers: [
      {
        username: "Kristina Solovyov",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officia eveniet molestias facilis tempore doloremque voluptates, possimus mollitia optio laudantium?",
      },
      {
        username: "Shekina Glorins",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officia eveniet molestias facilis tempore doloremque voluptates, possimus mollitia optio laudantium?",
      }, {
        username: "Steve Jobs",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officia eveniet molestias facilis tempore doloremque voluptates, possimus mollitia optio laudantium?",
      }, {
        username: "Mark Zukerberg",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officia eveniet molestias facilis tempore doloremque voluptates, possimus mollitia optio laudantium?"
    }]
  });

  const toggleModal = () => {
    setOpenModal(!openModal);
  }

  const handleAskQuestionSubmit = answer => {
    console.log('From parent', answer);

    toggleModal();
  }

  return (
    <Container className="PeopleProfile ComponentBodyContainer">
      <div className="ForumQuestion d-flex flex-row justify-content-center pb-2">
        <h2 className="col-8 col-sm-8 col-md-8 col-xl-8">Who is the dean of ИКС?</h2>
        <a className="AskButton" onClick={toggleModal}>Ask a question</a>
      </div>
      <Question
        username={forumContent.question.username} 
        question={forumContent.question.question}  
      />
      <div className="AnswersStats">
        <h4>{forumContent.answers.length} Answers</h4>
      </div>
      {
        forumContent.answers.map((ans, key) => 
          <Answer
            key={key}
            username={ans.username}
            answer={ans.answer}
          />
        )
      }
      <AnswerQuestion />
      <AskQuestion 
        openModal={openModal} 
        toggleModal={toggleModal} 
        handleAskQuestionSubmit={handleAskQuestionSubmit}
      />
    </Container>
  );
}