import React, { useState } from "react";
import {
  Container,
  TabContent, 
  TabPane, 
  Nav, 
  NavItem, 
  NavLink, 
  Card, 
  Button, 
  CardTitle, 
  CardText, 
  Row, 
  Col
} from 'reactstrap';
import Login from "./Login";
import Register from "./Register";
import "./css/index.css";

export default function Authenticate() {
  const [activeTab, setActiveTab] = useState('1');

  const toggleActiveTab = tab => setActiveTab(tab);
  

  return (
    <Container className="AuthenticationContainer">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={activeTab === '1' ? 'active' : ''}
            onClick={() => toggleActiveTab('1') }
          >
            Login
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === '2' ? 'active' : ''}
            onClick={() => toggleActiveTab('2') }
          >
            Register
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} className="p-2">
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <Login someProp={"Hey there"}/>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <Register />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </Container>
  );
}