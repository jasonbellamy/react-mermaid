import React from 'react';
import { storiesOf } from '@storybook/react';
import Mermaid from './react-mermaid';

storiesOf('Mermaid', module).add('basic', () => (
  <Mermaid name="stuff">{`
   graph TD;
          A-->B;
          A-->C;
          B-->D;
          C-->D;
    `}</Mermaid>
));
