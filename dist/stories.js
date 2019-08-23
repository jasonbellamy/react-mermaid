"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _reactMermaid = _interopRequireDefault(require("./react-mermaid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.storiesOf)('Mermaid', module).add('basic', function () {
  return _react["default"].createElement(_reactMermaid["default"], {
    name: "stuff"
  }, "\n   graph TD;\n          A-->B;\n          A-->C;\n          B-->D;\n          C-->D;\n    ");
});