"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mermaid = _interopRequireWildcard(require("mermaid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_mermaid["default"].initialize({
  startOnLoad: false
});

var Mermaid =
/*#__PURE__*/
function (_Component) {
  _inherits(Mermaid, _Component);

  function Mermaid(props) {
    var _this;

    _classCallCheck(this, Mermaid);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Mermaid).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      _mermaid.mermaidAPI.render(_this.props.name, _this.props.children.toString(), function (diagram) {
        return _this.setState({
          diagram: diagram
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      return _react["default"].createElement("div", {
        className: "mermaid ".concat(_this.props.className),
        dangerouslySetInnerHTML: {
          __html: _this.state.diagram
        }
      });
    });

    _this.state = {
      diagram: 'Loading diagram...'
    };
    return _this;
  }

  return Mermaid;
}(_react.Component);

exports["default"] = Mermaid;

_defineProperty(Mermaid, "propTypes", {
  children: _propTypes["default"].string.isRequired,
  className: _propTypes["default"].string,
  name: _propTypes["default"].string
});

_defineProperty(Mermaid, "defaultProps", {
  name: 'mermaid',
  className: ''
});