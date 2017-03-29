/**
 * Dropdowniz
 */

import React, { Component, PropTypes } from 'react';

const propTypes = {
  className: PropTypes.string,
  // discardDefault: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  left: PropTypes.bool,
  right: PropTypes.bool,
  show: PropTypes.bool.isRequired,
  width: PropTypes.string,
  zIndex: PropTypes.number,
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
    const clickInDD = e.target.classList.contains('DD');

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
    const className = this.props.className ? `DD ${this.props.className}` : 'DD';
    const dropDownDefaultStyles = {
      backgroundColor: '#fff',
      boxShadow: '0 0.2rem 1.6rem 0 #f4f3f0',
      top: 'calc(100% + 2.5rem)',
      opacity: 0,
      position: 'absolute',
      width: '20rem',
      zIndex: 1,
    };

    let alignment = {
      left: '50%',
      transform: 'translateX(-50%)',
    };

    let additionalStyles = {}

    if (this.props.left) {
      alignment = {
        left: 0,
      };
    }
    else if (this.props.right) {
      alignment = {
        right: 0,
      };
    }

    if (this.props.width) {
      additionalStyles = {
        ...additionalStyles,
        width: this.props.width,
      }
    }

    if (this.props.zIndex) {
      additionalStyles = {
        ...additionalStyles,
        zIndex: this.props.zIndex,
      }
    }

    if (!this.props.show) {
      return false;
    }
    return (
      <div
        className={className}
        style={Object.assign({}, dropDownDefaultStyles, additionalStyles, alignment, this.state.fadeIn)}
      >
        {this.props.children}
      </div>
    );
  }
}

DD.propTypes = propTypes;

export default DD;
