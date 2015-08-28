# React &lt;Mermaid&gt;

> A react component to display [mermaid](https://github.com/knsv/mermaid) diagrams and flowcharts.


## Getting Started

- Install with [NPM](https://www.npmjs.org/) - `npm install --save react-mermaid`


## Usage

```javascript
var React   = require('react');
var Mermaid = require('react-mermaid');

var Component = React.createClass({
  render: function () {
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
});
```


## Options


Property | Type     | Argument     | Default   | Description
---------|----------|--------------|-----------|------------
name     | `string` | `<optional>` | `mermaid` | name of the diagram/flowchart


## Developing

[react-mermaid](https://github.com/jasonbellamy/react-mermaid) is built using **ES6**. Run the following task to compile the `src/` into `dist/`.

```bash
npm run build
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.


## License
Copyright (c) 2015 [Jason Bellamy ](http://jasonbellamy.com)  
Licensed under the MIT license.
