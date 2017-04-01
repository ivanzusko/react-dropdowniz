/**
 * Dropdowniz
 */

import React, { Component, PropTypes } from 'react';

const propTypes = {
  show: PropTypes.bool.isRequired,
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

  componentDidMount () {
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
    document.addEventListener('click', this.clickDetector, false);
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.clickDetector, false);
  }

  clickDetector = (e) => {
    // const clickInDD = e.target.classList.contains('DD');

    this.handleClose();
  }

  handleOpen = () => {
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
  }

  handleClose = (e) => {
    this.setState((prevState) => ({
      isOpen: false,
      fadeIn: {},
    }));
    this.props.onClose();
  }

  render () {
    const { children, className, alignLeft, discardDefault, alignRight, onClose, show, style, ...rest} = this.props;
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

    if (!this.props.show) {
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
