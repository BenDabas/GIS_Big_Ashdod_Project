import React from 'react';
import { zoomInUp } from 'react-animations';
import { useHistory } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import mapImage from '../../assets/images/about-page.png';

import './index.css';

const ZoomInUp = styled.div`
  animation: 1s ${keyframes`${zoomInUp}`} 1;
`;

const AboutPage = () => {
  const history = useHistory();
  const handleBackButton = () => {
    history.push('/');
  };
  return (
    <div className="about-page-wrapper">
      <ZoomInUp>
        <h1>Big Ashdod</h1>
        <h3>Derech HaRakevet 1</h3>
        <h3>
          Sunday-Thursday 09:30-21:30 {<br />} Friday 09:00-15:00 {<br />}
          Saturday 10:00-23:00 {<br />} Phone: 073-2600482
        </h3>
        <div>
          <img className="map-image" src={mapImage} />
        </div>
        <button className="back-button" onClick={handleBackButton}>
          Back To Home Page
        </button>
      </ZoomInUp>
    </div>
  );
};

export default AboutPage;
