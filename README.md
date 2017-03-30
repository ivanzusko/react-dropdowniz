# React Dropdowniz
Simple and minimalistic dropdown React component

## Installation
Just run
```javascript
npm i react-dropdowniz
```
or (if you are using __Yarn__)
```javascript
yarn add react-dropdowniz
```


## Usage
The basic usage looks like this:
```javascript
import React, { Component } from 'react';
import Dropdown from 'react-dropdowniz';

class YourComponent extends Component {
  state = {
    showDropdown: false,
  }

  handleShowDropdown = () => {
    this.setState(() => ({
      showDropdown: true,
    }));
  }

  handleHideDropdown = () => {
    this.setState(() => ({
      showDropdown: false,
    }));
  }

  render() {
    return (
      <div>
        <h1>Some bla-bla title</h1>
        <button onClick={this.handleShowDropdown}>Open dropdown</button>

        {
          this.state.showDropdown &&
            <Dropdown
              className="your-class"
              right
              show={this.state.showDropdown}
              onClose={this.handleHideDropdown}
            >
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </Dropdown>
        }
      </div>
    );
  }
}
```

## Options

#### Required
Property | Type | Default value | Description
:---|:---|:---|:---
`onClose`| Function | true | Function responsible for changing the state of the component which includes `Dropdown`
`show`| boolean | true | responsible for show/hide dropdown

#### Not required
Property | Type  | Default value | Description
:---|:---|:---|:---
`className`| string | `DD` | custom className which will be added to the dafault `DD`
`left` or `right`| boolean |   | props which are responsible for alignment. If they are not stated - `Dropdown`, by ***default*** will be centered ***in the middle***
`styles`| Object |   | if you want, you can pass object with your styles. **NOTE:** This will override all your styles which you are passing as a single `props`(`width`, `zIndex` etc.), even if `styles` object does not contain one of those single styles passed as a single property. _**For example:**_  you are passing `width: "250px"` to the dropdown, and then you are passing object with bench of your styles as a `styles` property: `{ backgroundColor: '#e4e4e4', borderRadius: '4px' }`. Now your dropdown component will contain only `background-color` and `border-radius` (and all default styles supplied by react-dropdowniz component itself).
`width`| string | `20rem` | you can set `width` of the dropdown via `props` or pass your `className` and define rules in your styleshit
`zIndex`| number | `1` | you can set `z-index` of the dropdown via `props` or pass your `className` and define rules in your styleshit
