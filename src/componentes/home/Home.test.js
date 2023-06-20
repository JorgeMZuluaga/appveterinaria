import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../componentes/header/Header';
import Home from './Home';

describe('Home', () => {
  it('debería renderizar correctamente', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.exists()).toBe(true);
  });

  it('debería contener un componente Header', () => {
    const wrapper = shallow(<Home />);
    const header = wrapper.find(Header);
    expect(header.exists()).toBe(true);
  });

  it('debería contener un título y una imagen centrados', () => {
    const wrapper = shallow(<Home />);
    const title = wrapper.find('.centered-title');
    const image = wrapper.find('.centered-image');

    expect(title.exists()).toBe(true);
    expect(image.exists()).toBe(true);
  });

  

});