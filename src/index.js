/**
 * Dropdowniz
 */

import React, { Component, PropTypes } from 'react';

const propTypes = {
  onClose: PropTypes.func.isRequired,
  left: PropTypes.bool,
  right: PropTypes.bool,
  show: PropTypes.bool.isRequired,
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
    const dropDownDefaultStyles = {
      backgroundColor: '#fff',
      boxShadow: '0 0.2rem 1.6rem 0 #f4f3f0',
      top: 'calc(100% + 2.5rem)',
      opacity: 0,
      position: 'absolute',
      width: '20rem',
    };

    let alignment = {
      left: '50%',
      transform: 'translateX(-50%)',
    };

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

    if (!this.props.show) {
      return false;
    }
    return (
      <div
        className="DD"
        style={Object.assign({}, dropDownDefaultStyles, alignment, this.state.fadeIn)}
      >
        {this.props.children}
      </div>
    );
  }
}

DD.propTypes = propTypes;

export default DD;
