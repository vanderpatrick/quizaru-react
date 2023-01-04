import React from "react";
import { Col, Row } from "react-bootstrap";
const Game = () => {
  return (
    <div>
      <Row>
        <Col md={12} className="border mt-5 text-center">
          Amazing quizaru
          <Row>
            <Col md={12} className="mt-5">
              <p className="btn btn-primary">StartGame</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Game;
