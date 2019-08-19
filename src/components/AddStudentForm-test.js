import React from 'react';
import { shallow } from 'enzyme';
import AddStudentForm from './AddStudentForm';

describe('AddStudentForm', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<AddStudentForm
      addNewStudentInformation={jest.fn()}
      />);

      expect(wrapper).toMatchSnapshot(); 
  })
});