import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    // AiOutlineTwitter,
    //AiFillInstagram,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copyright">
          <h3>Developed by Michael Amponsah</h3>
        </Col>
        <Col md="4" className="footer-copyright">
          <h3>Copyright © {year} MA</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="d-flex gap-3 list-unstyled center">
            <li className="social-icons">
              <a
                href="https://github.com/Platini983/"
                style={{ color: "1A6AA2" }} >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/michael-amponsah-27237a108"
                style={{ color: "1A6AA2" }} >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer