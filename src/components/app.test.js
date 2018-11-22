import App from "./app";
import React from "react";
import {shallow} from "enzyme";

describe('App test', () => {
    test('should render header', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('h1').text()).toBe('Hi, Welcome to my react boiler plate');
    });
});