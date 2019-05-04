import React from "react";
import { Container } from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        {/* <span>Built by <a target="_blank" color="link" href="https://twitter.com/rotimi_best" rel="noopener noreferrer">Rotimi-Best</a></span> */}
        <span>&copy; {new Date().getFullYear()} <a color="link" href="/" rel="noopener noreferrer">mVivid</a></span>
      </Container>
    </footer>
  );
}