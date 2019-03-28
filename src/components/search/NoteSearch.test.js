import React from 'react'
import Enzyme, {shallow, mount} from 'enzyme'
import NoteSearch from './NoteSearch'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter() });

describe("search component", () => {
    test("renders", () => {
        const wrapper = shallow(<NoteSearch />);
        expect(wrapper.exists()).toBe(true);
    });

}) 



// todo test