import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SignupForm from '../../components/SignupForm';

export default function Login() {
  return (
    <div>
      <div className="background-svg">
        <svg xmlns="http://www.w3.org/2000/svg" width="877.073" height="1150.292" viewBox="0 0 877.073 1080.292">
          <g id="Group_7" data-name="Group 7" transform="translate(0.073 0.726)">
            <path id="Path_6" data-name="Path 6" d="M1940.985,429.107s21.917,7.273,11.568-24.016,16.312-13.895,13.3-33.1" transform="translate(592.495 -1518.405) rotate(74)" fill="none" stroke="#f1c40f" stroke-linecap="round" stroke-width="5" />
            <path id="Path_7" data-name="Path 7" d="M1940.985,429.107s21.917,7.273,11.568-24.016,16.312-13.895,13.3-33.1" transform="translate(1069.494 -989.575) rotate(90)" fill="none" stroke="#2980b9" stroke-linecap="round" stroke-width="5" />
            <g id="Polygon_1" data-name="Polygon 1" transform="translate(746.877 132.881) rotate(-22)" fill="none">
              <path d="M23.277,6.662a5,5,0,0,1,8.446,0L50.133,35.7A5,5,0,0,1,45.91,43.38H9.09A5,5,0,0,1,4.867,35.7Z" stroke="none" />
              <path d="M 27.5 13.07407760620117 L 12.72553634643555 36.38028335571289 L 42.27446365356445 36.38028335571289 L 27.5 13.07407760620117 M 27.5 4.338623046875 C 29.12062072753906 4.338623046875 30.74123954772949 5.112934112548828 31.72295951843262 6.661563873291016 L 50.13329315185547 35.70322799682617 C 52.2436408996582 39.03223037719727 49.85187911987305 43.38028335571289 45.91033172607422 43.38028335571289 L 9.089653015136719 43.38028335571289 C 5.148105621337891 43.38028335571289 2.756359100341797 39.03223037719727 4.866706848144531 35.70322799682617 L 23.27704048156738 6.661563873291016 C 24.25876045227051 5.112934112548828 25.87937927246094 4.338623046875 27.5 4.338623046875 Z" stroke="none" fill="#366E42" />
            </g>
            <g id="Polygon_2" data-name="Polygon 2" transform="translate(584.743 674.41) rotate(25)" fill="none">
              <path d="M23.277,6.662a5,5,0,0,1,8.446,0L50.133,35.7A5,5,0,0,1,45.91,43.38H9.09A5,5,0,0,1,4.867,35.7Z" stroke="none" />
              <path d="M 27.5 13.07407760620117 L 12.72553634643555 36.38028335571289 L 42.27446365356445 36.38028335571289 L 27.5 13.07407760620117 M 27.5 4.338623046875 C 29.12062072753906 4.338623046875 30.74123954772949 5.112934112548828 31.72295951843262 6.661563873291016 L 50.13329315185547 35.70322799682617 C 52.2436408996582 39.03223037719727 49.85187911987305 43.38028335571289 45.91033172607422 43.38028335571289 L 9.089653015136719 43.38028335571289 C 5.148105621337891 43.38028335571289 2.756359100341797 39.03223037719727 4.866706848144531 35.70322799682617 L 23.27704048156738 6.661563873291016 C 24.25876045227051 5.112934112548828 25.87937927246094 4.338623046875 27.5 4.338623046875 Z" stroke="none" fill="#959494" />
            </g>
            <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(700 784)" fill="none" stroke="#366E42" stroke-width="9">
              <circle cx="45.5" cy="45.5" r="45.5" stroke="none" />
              <circle cx="45.5" cy="45.5" r="41" fill="none" />
            </g>
            <g id="Ellipse_2" data-name="Ellipse 2" transform="translate(829 307)" fill="none" stroke="#2980b9" stroke-width="7">
              <circle cx="24" cy="24" r="24" stroke="none" />
              <circle cx="24" cy="24" r="20.5" fill="none" />
            </g>
            <path id="Path_5" data-name="Path 5" d="M2075.282,907.566s-289.8-61.695-72.64-264.292-60.67-483.848-60.67-483.848h659.747v748.14Z" transform="translate(2601.645 1238.992) rotate(-180)" fill="#959494" />
            <path id="Path_8" data-name="Path 8" d="M1210,240.23c153.479,150.755,316.832,103.48,414.557,104.336,292.493-3.379,432.673-442.931,184.058-442.291s-598.615,0-598.615,0S1056.521,89.475,1210,240.23Z" transform="translate(97.652 1978.746) rotate(-90)" fill="#5c9969" />
            <path id="Path_4" data-name="Path 4" d="M1210,278.814s70.825,240.844,355.5,147.713c311.21-108.053,491.732-524.977,243.117-524.252s-598.615,0-598.615,0Z" transform="translate(-1210 97)" fill="#366e42" />
          </g>
        </svg>
      </div>
      <Container fluid="true">
        <Row>
          <Col></Col>
          <Col className="sign-up">
            <Row>
              <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="300" height="117" viewBox="0 0 647.915 257.823">
                <g id="Group_8" data-name="Group 8" transform="translate(-188.085 -127)">
                  <text id="swurf" transform="translate(449 301)" fill="#366e43" font-size="160" font-family="Europa-Regular"><tspan x="0" y="0">swurf</tspan></text>
                  <g id="Group_5" data-name="Group 5" transform="translate(47 38.5)">
                    <path id="Path_1" data-name="Path 1" d="M3.1,173.475l68.566-10.86c39.927-6.324,65.962-20.375,66.281-45.761.386-30.714-20.348-40.8-52.006-46.7C59,65.138,46.458,63.709,46.572,54.621S66.43,41.7,81.279,39.347c24.5-3.843,77.745-12.314,77.745-12.314L154.457-1.8,76.5,10.546C33.606,17.341,7.031,31.266,6.74,54.458c-.354,28.206,27.174,40.42,58.832,46.318,24.25,4.418,31.654,6.212,31.532,15.927-.114,9.089-12.989,12.272-30.367,15.024L-1.79,142.582Z" transform="translate(169.991 125.796) rotate(9)" fill="#1a703e" />
                    <path id="Path_2" data-name="Path 2" d="M0,0V75" transform="translate(245.03 88.5)" fill="none" stroke="#1a703e" stroke-width="35" />
                    <line id="Line_2" data-name="Line 2" y2="75" transform="translate(214.211 271.323)" fill="none" stroke="#1a703e" stroke-width="35" />
                  </g>
                </g>
              </svg>
            </Row>
            <Row><SignupForm /></Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
