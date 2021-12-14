import React, {
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import mermaid, {
  mermaidAPI,
} from 'mermaid';

mermaid.initialize({ startOnLoad: false });

const Mermaid = ({
  name = 'mermaid',
  children,
  className,
}) => {
  const [
    diagram,
    setDiagram,
  ] = useState('Loading diagram...');

  useEffect(
    () => {
      mermaidAPI.render(
        name,
        children.toString(),
        svgCode => setDiagram(svgCode),
      );
    },
    [
      name,
      children,
    ],
  );

  return (
    <div
      className={`mermaid ${className}`}
      dangerouslySetInnerHTML={{ __html: diagram }}
    />
  );
};

Mermaid.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  name: PropTypes.string,
};

export default Mermaid;
