'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mermaid = require('mermaid');

var _mermaid2 = _interopRequireDefault(_mermaid);

var Mermaid = _react2['default'].createClass({
  displayName: 'Mermaid',

  propTypes: {
    name: _react2['default'].PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      name: 'mermaid'
    };
  },

  getInitialState: function getInitialState() {
    return {
      diagram: 'Loading diagram...'
    };
  },

  componentDidMount: function componentDidMount() {
    var _this = this;

    _mermaid.mermaidAPI.render(this.props.name, this.props.children.toString(), function (html) {
      return _this.setState({ diagram: html });
    });
  },

  render: function render() {
    return _react2['default'].createElement('div', { className: 'mermaid', dangerouslySetInnerHTML: { __html: this.state.diagram } });
  }
});

exports['default'] = Mermaid;
module.exports = exports['default'];