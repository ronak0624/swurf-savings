import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SignupForm from '../../components/SignupForm';

export default function Login() {
  return (
    <div>
      <Container fluid="true">
        <Row>
          <Col></Col>
          <Col className="sign-up">
            <Row>
              <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="300" height="117" viewBox="0 0 670 257.823">
                <g id="Group_8" data-name="Group 8" transform="translate(-188.085 -127)">
                  <text id="swurf" transform="translate(449 301)" fill="#366e43" font-size="160" font-family="Europa"><tspan x="0" y="0">swurf</tspan></text>
                  <g id="Group_5" data-name="Group 5" transform="translate(47 38.5)">
                    <path id="Path_1" data-name="Path 1" d="M3.1,173.475l68.566-10.86c39.927-6.324,65.962-20.375,66.281-45.761.386-30.714-20.348-40.8-52.006-46.7C59,65.138,46.458,63.709,46.572,54.621S66.43,41.7,81.279,39.347c24.5-3.843,77.745-12.314,77.745-12.314L154.457-1.8,76.5,10.546C33.606,17.341,7.031,31.266,6.74,54.458c-.354,28.206,27.174,40.42,58.832,46.318,24.25,4.418,31.654,6.212,31.532,15.927-.114,9.089-12.989,12.272-30.367,15.024L-1.79,142.582Z" transform="translate(169.991 125.796) rotate(9)" fill="#1a703e" />
                    <path id="Path_2" data-name="Path 2" d="M0,0V75" transform="translate(245.03 88.5)" fill="none" stroke="#1a703e" stroke-width="35" />
                    <line id="Line_2" data-name="Line 2" y2="75" transform="translate(214.211 271.323)" fill="none" stroke="#1a703e" stroke-width="35" />
                  </g>
                </g>
              </svg>
            </Row>
            <Row><SignupForm /></Row>
            <Row><a className="mx-auto mt-4" href="/login">Already have an account?</a></Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
