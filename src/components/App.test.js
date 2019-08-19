import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should update the state with a new student when addStudent is called', () => {
    const wrapper = shallow(<App />);
    const mockStudent = {
      id: 243,
      name: 'Emily',
      Quote: 'Why not',
      superlative: 'Most likely to be awesome',
      photo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/23659304_10212834442594496_293127330163940290_n.jpg?_nc_cat=105&_nc_oc=AQldhwDzyXcK8-dhl2mWh1n9TTOnf3oQcKCsqSwv0FPCpXWctLF5OMhazPtqLfo-A78Vtpf5_1bu3hU6MZP_D37j&_nc_ht=scontent.fapa1-2.fna&oh=8d24d18ef68c690d333e33c4364c8ee1&oe=5E0C8FD0'
    };
    const expected = [mockStudent];
    wrapper.instance().addStudent(mockStudent);
    expect(wrapper.state('students')).toHaveLength(19);
  })
});
