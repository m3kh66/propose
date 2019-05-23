import React from 'react';
import { shallow } from 'enzyme';
import { TextField } from './textfield';

describe('TextField', () => {

    it('should match text snapshot', () => {
        const wrapper = shallow(<TextField title="Text" />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should match number snapshot', () => {
        const wrapper = shallow(<TextField title="Text" type="number" />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should match password snapshot', () => {
        const wrapper = shallow(<TextField title="Text" type="password" />);
        expect(wrapper).toMatchSnapshot();
    });

});