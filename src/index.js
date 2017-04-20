/**
 * Dropdowniz
 */

import React, { Component, PropTypes } from 'react';

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  alignLeft: PropTypes.bool,
  alignRight: PropTypes.bool,
  className: PropTypes.string,
  discardDefault: PropTypes.bool,
  style: PropTypes.object,
};

class DD extends Component {
  state = {
    isOpen: false,
    fadeIn: {},
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.isOpen) {
      this.setState(() => ({
        isOpen: true,
      }));
      setTimeout(() => {
        this.setState(() => ({
          fadeIn: {
            top: '100%',
            opacity: 1,
            transition: '150ms',
          },
        }));
      }, 1);

      if (this.detectiOS() === 'iOS') {
        setTimeout(() => {
          document.addEventListener('touchstart', this.clickDetector, false);
        }, 1);
      }
      else {
        document.addEventListener('click', this.clickDetector, false);
      }
    }
    else {
      this.setState(() => ({
        isOpen: false,
      }));

      if (this.detectiOS() === 'iOS') {
        setTimeout(() => {
          document.removeEventListener('touchstart', this.clickDetector, false);
        }, 1);
      }
      else {
        document.removeEventListener('click', this.clickDetector, false);
      }
    }
  }

  detectiOS = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return 'iOS';
    }
  }

  clickDetector = () => {
    this.handleClose();
  }

  handleClose = () => {
    this.setState((prevState) => ({
      isOpen: false,
      fadeIn: {},
    }));
    this.props.onClose();
  }

  render () {
    const { children, className, alignLeft, discardDefault, alignRight, onClose, isOpen, style, ...rest} = this.props;
    const computedClassName = className ? `DD ${className}` : 'DD';
    const propStyle = this.props.style || {};
    let dropDownDefaultStyles = {
      backgroundColor: '#fff',
      boxShadow: '0 2px 16px 0 #f4f3f0',
      top: 'calc(100% + 25px)',
      opacity: 0,
      position: 'absolute',
      width: '200px',
      zIndex: 1,
    };

    if (discardDefault) {
      dropDownDefaultStyles = {};
    };

    let alignment = {
      left: '50%',
      transform: 'translateX(-50%)',
    };

    if (alignLeft) {
      alignment = {
        left: 0,
      };
    }
    else if (alignRight) {
      alignment = {
        right: 0,
      };
    }

    const computedStyles = Object.assign(
      {},
      dropDownDefaultStyles,
      alignment,
      propStyle,
      rest,
      this.state.fadeIn,
    );

    if (!this.props.isOpen) {
      return false;
    }
    return (
      <div
        className={computedClassName}
        style={computedStyles}
      >
        {this.props.children}
      </div>
    );
  }
}

DD.propTypes = propTypes;

export default DD;
