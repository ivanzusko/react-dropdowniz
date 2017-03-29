(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.index = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var propTypes = {
    className: _react.PropTypes.string,
    // discardDefault: PropTypes.bool,
    onClose: _react.PropTypes.func.isRequired,
    left: _react.PropTypes.bool,
    right: _react.PropTypes.bool,
    show: _react.PropTypes.bool.isRequired,
    width: _react.PropTypes.string,
    zIndex: _react.PropTypes.number
  };

  var DD = function (_Component) {
    _inherits(DD, _Component);

    function DD() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, DD);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DD.__proto__ || Object.getPrototypeOf(DD)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        isOpen: false,
        fadeIn: {}
      }, _this.clickDetector = function (e) {
        var clickInDD = e.target.classList.contains('DD');

        _this.handleClose();
      }, _this.handleOpen = function () {
        _this.setState(function () {
          return {
            isOpen: true
          };
        });
        setTimeout(function () {
          _this.setState(function () {
            return {
              fadeIn: {
                top: '100%',
                opacity: 1,
                transition: '150ms'
              }
            };
          });
        }, 1);
      }, _this.handleClose = function (e) {
        _this.setState(function (prevState) {
          return {
            isOpen: false,
            fadeIn: {}
          };
        });
        _this.props.onClose();
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(DD, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        this.setState(function () {
          return {
            isOpen: true
          };
        });
        setTimeout(function () {
          _this2.setState(function () {
            return {
              fadeIn: {
                top: '100%',
                opacity: 1,
                transition: '150ms'
              }
            };
          });
        }, 1);
        document.addEventListener('click', this.clickDetector, false);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        document.removeEventListener('click', this.clickDetector, false);
      }
    }, {
      key: 'render',
      value: function render() {
        var className = this.props.className ? 'DD ' + this.props.className : 'DD';
        var dropDownDefaultStyles = {
          backgroundColor: '#fff',
          boxShadow: '0 0.2rem 1.6rem 0 #f4f3f0',
          top: 'calc(100% + 2.5rem)',
          opacity: 0,
          position: 'absolute',
          width: '20rem',
          zIndex: 1
        };

        var alignment = {
          left: '50%',
          transform: 'translateX(-50%)'
        };

        var additionalStyles = {};

        if (this.props.left) {
          alignment = {
            left: 0
          };
        } else if (this.props.right) {
          alignment = {
            right: 0
          };
        }

        if (this.props.width) {
          additionalStyles = _extends({}, additionalStyles, {
            width: this.props.width
          });
        }

        if (this.props.zIndex) {
          additionalStyles = _extends({}, additionalStyles, {
            zIndex: this.props.zIndex
          });
        }

        if (!this.props.show) {
          return false;
        }
        return _react2.default.createElement(
          'div',
          {
            className: className,
            style: Object.assign({}, dropDownDefaultStyles, additionalStyles, alignment, this.state.fadeIn)
          },
          this.props.children
        );
      }
    }]);

    return DD;
  }(_react.Component);

  DD.propTypes = propTypes;

  exports.default = DD;
});