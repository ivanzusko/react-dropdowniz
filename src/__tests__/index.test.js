import React from 'react';
import { shallow } from 'enzyme';

import DD from '../index';

describe('Dropdowniz', () => {
  describe('#render', () => {
    it('should render without crashing if is open', () => {
      const props = {
        isOpen: true,
        onClose: jest.fn(),
      };
      const wrapper = shallow(<DD {...props} />);

      expect(wrapper.find('.DD').length).toBe(1);
    });

    it('should render with additional className if it was passed', () => {
      const props = {
        isOpen: true,
        onClose: jest.fn(),
        className: 'mock-class',
      };
      const wrapper = shallow(<DD {...props} />);

      expect(wrapper.find('.DD.mock-class').length).toBe(1);
    });

    it('should not render if is closed', () => {
      const props = {
        isOpen: false,
        onClose: jest.fn(),
      };
      const wrapper = shallow(<DD {...props} />);

      expect(wrapper.find('.DD').length).toBe(0);
    });
  });

  describe('receiving props', () => {
    it('should get default styles', () => {
      const props = {
        isOpen: true,
        onClose: jest.fn(),
      };
      const alignment = {
        left: '50%',
        transform: 'translateX(-50%)',
      };
      const dropDownDefaultStyles = {
        backgroundColor: '#fff',
        boxShadow: '0 2px 16px 0 #f4f3f0',
        top: 'calc(100% + 25px)',
        opacity: 0,
        position: 'absolute',
        width: '200px',
        zIndex: 1,
      };
      const computedStyles = {
        ...dropDownDefaultStyles,
        ...alignment,
      };
      const wrapper = shallow(<DD {...props} />);

      expect(wrapper.find('.DD').props().style).toEqual(computedStyles);
    });

    it('should not get default styles', () => {
      const props = {
        isOpen: true,
        onClose: jest.fn(),
        discardDefault: true,
      };
      const alignment = {
        left: '50%',
        transform: 'translateX(-50%)',
      };
      const dropDownDefaultStyles = {};
      const computedStyles = {
        ...dropDownDefaultStyles,
        ...alignment,
      };
      const wrapper = shallow(<DD {...props} />);

      expect(wrapper.find('.DD').props().style).toEqual(computedStyles);
    });

    it('should get alignment to left side', () => {
      const props = {
        isOpen: true,
        onClose: jest.fn(),
        alignLeft: true,
        alignRight: true,
      };
      const alignment = {
        left: 0,
      };
      const dropDownDefaultStyles = {
        backgroundColor: '#fff',
        boxShadow: '0 2px 16px 0 #f4f3f0',
        top: 'calc(100% + 25px)',
        opacity: 0,
        position: 'absolute',
        width: '200px',
        zIndex: 1,
      };
      const computedStyles = {
        ...dropDownDefaultStyles,
        ...alignment,
      };
      const wrapper = shallow(<DD {...props} />);

      expect(wrapper.find('.DD').props().style).toEqual(computedStyles);
    });

    it('should get alignment to right side', () => {
      const props = {
        isOpen: true,
        onClose: jest.fn(),
        alignRight: true,
      };
      const alignment = {
        right: 0,
      };
      const dropDownDefaultStyles = {
        backgroundColor: '#fff',
        boxShadow: '0 2px 16px 0 #f4f3f0',
        top: 'calc(100% + 25px)',
        opacity: 0,
        position: 'absolute',
        width: '200px',
        zIndex: 1,
      };
      const computedStyles = {
        ...dropDownDefaultStyles,
        ...alignment,
      };
      const wrapper = shallow(<DD {...props} />);

      expect(wrapper.find('.DD').props().style).toEqual(computedStyles);
    });
  });
});
