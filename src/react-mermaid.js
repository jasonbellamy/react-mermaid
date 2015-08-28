import React from 'react';
import mermaid, {mermaidAPI} from 'mermaid';

const Mermaid = React.createClass({

  propTypes: {
    name: React.PropTypes.string
  },

  getDefaultProps () {
    return {
      name: 'mermaid'
    };
  },

  getInitialState () {
    return {
      diagram: 'Loading diagram...'
    };
  },

  componentDidMount () {
    mermaidAPI.render(this.props.name, this.props.children.toString(), (html) => this.setState({diagram: html}));
  },

  render () {
    return (
      <div className="mermaid" dangerouslySetInnerHTML={{__html: this.state.diagram}}></div>
    )
  }
});

export default Mermaid;
