import React from 'react';
import { shallow } from 'enzyme';
import Cohort from './Cohort';

describe('Person', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<Cohort
      
      />);

      expect(wrapper).toMatchSnapshot(); 
  })
});