import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  it('debería renderizar correctamente', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it('debería contener enlaces a las diferentes páginas', () => {
    const wrapper = shallow(<Header />);
    const links = wrapper.find(Link);
    expect(links).toHaveLength(5);
    expect(links.at(0).prop('to')).toEqual('/');
    expect(links.at(1).prop('to')).toEqual('/ListarClientes');
    expect(links.at(2).prop('to')).toEqual('/CrearCliente');
    expect(links.at(3).prop('to')).toEqual('/CrearMascota');
    expect(links.at(4).prop('to')).toEqual('/ListarMascota');
  });

  // Agrega más pruebas aquí según tus necesidades

});