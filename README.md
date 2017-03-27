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

Property | Type | isRequired | Default value | Description
:---|:---|:---|:---|:---
`className`| string | false | `DD` | custom className which will be added to the dafault `DD`
`onClose`| Function | true |  | Function responsible for changing the state of the component which includes `Dropdown`
`show`| boolean | true |   | responsible for show/hide dropdown
`left` or `right`| boolean | false |   | props which are responsible for alignment. If they are not stated - `Dropdown`, by ***default*** will be centered ***in the middle***
