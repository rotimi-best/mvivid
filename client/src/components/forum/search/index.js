import React from "react";
import { Container } from "reactstrap";
import SearchContainer from "../../search/SearchContainer";
import NotFound from "../../search/NotFound";
import ForumSearchResult from "./ForumSearchResult";

export default function Forum() {
  return (
    <Container className="ComponentBodyContainer">
      <SearchContainer 
        header="Ask and get answers to any question" 
        askButton={true}
        placeholder="Enter any keyword related to your question like University, hostel"
      />
      <ForumSearchResult />
    </Container>
  )
}