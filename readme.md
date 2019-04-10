# React &lt;Mermaid&gt;

> A react component to display [mermaid](https://github.com/knsv/mermaid) diagrams and flowcharts.

## Getting Started

- Install with [NPM](https://www.npmjs.org/) - `npm install --save react-mermaid`

## Usage

```javascript
import React from 'react';
import Mermaid from 'react-mermaid';

class Component extends React.Component {
  render() {
    return (
      <Mermaid name="diagram">
        graph TD;
          A-->B;
          A-->C;
          B-->D;
          C-->D;
      </Mermaid>
    );
  }
};
```


## Options

| Property | Type     | Argument     | Default   | Description                   |
| -------- | -------- | ------------ | --------- | ----------------------------- |
| name     | `string` | `<optional>` | `mermaid` | name of the diagram/flowchart |


## Developing

[react-mermaid](https://github.com/jasonbellamy/react-mermaid) is built using **ES6**. Run the following task to compile the `src/` into `dist/`.

```bash
npm run build
```


## Contributing
Run `npm run lint` to execute the `eslint` rules
Run `npm run lint:watch` to watch the `src` directory with linting


## License
Copyright (c) 2015 [Jason Bellamy](http://jasonbellamy.com)
Licensed under the MIT license.
