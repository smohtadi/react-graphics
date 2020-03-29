import React from 'react';
import PropTypes from 'prop-types';
import './css/logoSpin.css';

function SpinLogo({ color, width, imgX, imgY, imgS, logoImg,  outerSpreadColor }) {
  const container_style = { width, height: width, position: 'relative' };
  return (
    <React.Fragment>
      <div style={container_style}>
        <div class='circle-0' style={{ color: outerSpreadColor }}></div>
        <div class='circle-1' style={{ color: outerSpreadColor }}></div>
        <div class='logo-wrapper'>
          <div class='logo' style={{ background: color }}>
            <img
              src={logoImg}
              alt=''
              style={{ transform: `translate(${imgX},${imgY}) scale(${imgS})` }}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

SpinLogo.propTypes = {
  color: PropTypes.string,
  logoImg: PropTypes.object,
  outerSpreadColor: PropTypes.string,
  imgS: PropTypes.number,
  imgX: PropTypes.string,
  imgY: PropTypes.string,
  width: PropTypes.string,
};

SpinLogo.defaultProps = {
  color: '#408eff',
  imgS: 0.5,
  imgX: '0',
  imgY: '0',
  logoImg: null,
  outerSpreadColor: '#408eff',
  width: '100px',
};

SpinLogo.propDescriptions = {
  color: 'Color of the logo container.',
  imgS: 'Sets the scale of the img',
  imgX: 'Sets the translateX of the img',
  imgY: 'Sets the translateY of the img',
  logoImg: 'Img of logo. Ensure size is square.',
  outerSpreadColor: 'Sets the color of the outer spread',
  width: 'Specifies the width and height of SpinLogo component.',
};

export default SpinLogo;
