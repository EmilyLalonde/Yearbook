import React from 'react';
import { shallow } from 'enzyme';
import Person from './Person';

describe('Person', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<Person
      photo='https://media.licdn.com/dms/image/C4E03AQEg-ifr5xkGNQ/profile-displayphoto-shrink_800_800/0?e=1571270400&v=beta&t=iDx82SrF-fB-uWT7jqO2YKGpvKu2G3x7_E9DfpscXc8' 
      name='Eric'
      quote='You miss all the shots you dont take.'
      superlative='Most Likely to Win the PGA'
      id={1}
      deleteCard={jest.fn()}
      />);

      expect(wrapper).toMatchSnapshot(); 
  })
});