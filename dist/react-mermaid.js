"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mermaid = _interopRequireWildcard(require("mermaid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

_mermaid.default.initialize({
  startOnLoad: false
});

var Mermaid = function Mermaid(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'mermaid' : _ref$name,
      children = _ref.children,
      className = _ref.className;

  var _useState = (0, _react.useState)('Loading diagram...'),
      _useState2 = _slicedToArray(_useState, 2),
      diagram = _useState2[0],
      setDiagram = _useState2[1];

  (0, _react.useEffect)(function () {
    _mermaid.mermaidAPI.render(name, children.toString(), function (svgCode) {
      return setDiagram(svgCode);
    });
  }, [name, children]);
  return _react.default.createElement("div", {
    className: "mermaid ".concat(className),
    dangerouslySetInnerHTML: {
      __html: diagram
    }
  });
};

Mermaid.propTypes = {
  children: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  name: _propTypes.default.string
};
var _default = Mermaid;
exports.default = _default;