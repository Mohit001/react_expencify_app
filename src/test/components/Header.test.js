import ReactShallowRenderer from 'react-test-renderer/shallow'
import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json'
import Header from '../../components/Header';
import { NavLink } from 'react-router-dom';

test('should render Header', () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    Enzyme.configure({ adapter: new Adapter() })
    const wrapper = shallow(<Header />)
    expect(wrapper.find(NavLink).length).toBe(4)
    expect(toJSON(wrapper))
})
