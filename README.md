# React Dropdowniz
Simple and minimalistic dropdown React component

## Example
[https://ivanzusko.github.io/react-dropdowniz/](https://ivanzusko.github.io/react-dropdowniz/)

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
              alignRight // to align dropdown on the right
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

### You can provide your own styles:
- by __writing CSS rules in your styleshit__ (as far as you are passing `className` as a prop);
- by __passing an object with styles__ as a `style` prop(as you can do with any another regular React component):

```javascript
const myStyles = {
  backgroundColor: 'rgba(255, 255, 255, .6)',
  border: 'solid 1px salmon',
}

<Dropdown
  style={myStyles} // just like with any other React components
  show={this.state.showDropdown}
  onClose={this.handleHideDropdown}
>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</Dropdown>
```
- by __passing inline any valid CSS rule__ as a prop straight into component(e.g. `backgroundColor="#f00"`):

```javascript
<Dropdown
  show={this.state.showDropdown}
  onClose={this.handleHideDropdown}
  backgroundColor="#f00"
  zIndex={100}
>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</Dropdown>
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
`className`| string | `DD` | custom className which will be added to the default `DD`
`alignLeft` or `alignRight`| boolean |   | props which are responsible for alignment. If they are not stated - `Dropdown`, by ***default*** will be centered ***in the middle*** (related to container in which dropdown is rendering). **NOTE:** you should not use both `alignLeft` and `alignRight` simultaneously, because dropdown will get `left: 0` in this case
`discardDefault`| boolean |  | If you want you can totally discard all the default styles, just be sure you are providing your own styles instead
`style`| Object |   | if you want, you can pass object with your styles (like you would do with any other React components).
`width`, `backgroundColor`, `zIndex` or any another valid CSS rule | string |  | you can pass any valid CSS rule via `props`. **NOTE:** single CSS style rules passed via `props` will have higher priority then styles passed inside the object via `style` prop. E.g. if you pass `style={{ width: '10rem', zIndex: '3' }}` and at the same time `zIndex={100}` - your dropDown will get `z-index: 100`
