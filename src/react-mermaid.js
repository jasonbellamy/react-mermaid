import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mermaid, { mermaidAPI } from 'mermaid';

mermaid.initialize({ startOnLoad: false });

export default class Mermaid extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    name: PropTypes.string,
  };

  static defaultProps = {
    name: 'mermaid',
    className: '',
  }

  constructor(props) {
    super(props);
    this.state = {
      diagram: 'Loading diagram...',
    };
  }

  componentDidMount = () => {
    mermaidAPI.render(
      this.props.name,
      this.props.children.toString(),
      diagram => this.setState({ diagram }),
    );
  }

  render = () => (
    <div className={`mermaid ${this.props.className}`} dangerouslySetInnerHTML={{ __html: this.state.diagram }} />
  );
}
