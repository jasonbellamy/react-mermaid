import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mermaid, { mermaidAPI } from 'mermaid';

mermaid.initialize({ startOnLoad: false });

export default class Mermaid extends Component {
  static propTypes = {
    name: PropTypes.string,
    children: PropTypes.string.isRequired,
  };

  static defaultProps = {
    name: 'mermaid',
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
    <div className="mermaid" dangerouslySetInnerHTML={{ __html: this.state.diagram }} />
  );
}
