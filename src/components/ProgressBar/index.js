import React from 'react';
import PropTypes from 'prop-types';
import './css/ProgressBarStyle.css';

function ProgressBar({ color, borderRadius, height, width }) {
  return (
    <React.Fragment>
      <div class='bar-container' style={{ width, height, borderRadius }}>
        <div class='bar' style= {{ background: color }}></div>
        <div class='shine'><div className='shine-bar'></div></div>
		</div>
    </React.Fragment>
  );
}

ProgressBar.propTypes = {
  borderRadius: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
}

ProgressBar.defaultProps = {
  borderRadius: '10px',
  color: 'linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55)',
  height: '1vh',
  width: '20vw',
}

ProgressBar.propDescriptions = {
  borderRadius: 'Sets the border radius of the progress bar.',
  color: 'Sets the background color or gradient of the progress bar.',
  height: 'Sets the height of the progress bar.',
  width: 'Sets the width of the progress bar.',
}

export default ProgressBar;