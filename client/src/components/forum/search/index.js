import React from "react";
import { Container } from "reactstrap";
import SearchContainer from "../../search/SearchContainer";
import NotFound from "../../search/NotFound";
import ForumSearchResult from "./ForumSearchResult";

export default function Forum() {
  return (
    <Container className="ComponentBodyContainer">
      <SearchContainer header="Ask and get answers to any question" />
      <ForumSearchResult />
    </Container>
  )
}