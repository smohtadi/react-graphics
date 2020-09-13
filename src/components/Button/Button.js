import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './button.css';

const BUTTON_VARIANTS = [
  'primary',
  'secondary',
  'success',
  'danger'
];


const Button = React.forwardRef(
  ({
    children,
    className,
    disabled,
    onClick,
    size,
    typeAttr,
    variant,
    ...props
  },ref) => {
    const buttonClasses = classNames('sm-button', {
      [`sm-button--${variant}`]: !!variant,
      'disabled': disabled,
    });

    let handleOnClick = disabled ? () => {} : onClick;
    return (
      <>
        <button
          {...props}
          className={buttonClasses}
          disabled = { disabled }
          onClick={handleOnClick}
          ref={ref}
          type={typeAttr}
        >
          <svg
            class="sm-button__spec"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
          >
            <g transform="translate(-60 -60)">
              <rect
                width="22"
                height="22"
                transform="translate(60 60)"
                fill="none"
              />
              <ellipse
                cx="3"
                cy="9"
                rx="3"
                ry="9"
                transform="translate(77.909 62.077) rotate(49)"
                fill="#fff"
              />
            </g>
          </svg>
          {children}
        </button>
      </>
    );
  }
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  typeAttr: PropTypes.string,
  variant: PropTypes.oneOf(BUTTON_VARIANTS)
};

Button.defaultProps = {
  typeAttr: 'button',
};

export default Button;
