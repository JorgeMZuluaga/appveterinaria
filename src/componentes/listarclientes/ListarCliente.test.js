import React from 'react';
import { shallow } from 'enzyme';
import UersList from './UersList';

describe('UersList', () => {
  const mockClientes = [
    {
      Identificacion: '1',
      Nombre: 'John',
      Apellido: 'Doe',
      Telefono: '1234567890',
      Email: 'johndoe@example.com'
    },
    {
      Identificacion: '2',
      Nombre: 'Jane',
      Apellido: 'Smith',
      Telefono: '0987654321',
      Email: 'janesmith@example.com'
    }
  ];

  beforeEach(() => {
    localStorage.setItem('localcliente', JSON.stringify(mockClientes));
  });

  it('debería mostrar la lista de clientes', () => {
    const wrapper = shallow(<UersList />);
    const clienteItems = wrapper.find('.grid-item');
    expect(clienteItems).toHaveLength(mockClientes.length);
  });

  it('debería eliminar un cliente al hacer clic en el botón de eliminar', () => {
    const wrapper = shallow(<UersList />);
    const deleteButton = wrapper.find('.delete-button').first();

    // Simular el clic en el botón de eliminar
    deleteButton.simulate('click');

    // Verificar que el cliente se haya eliminado
    expect(wrapper.state('clientes')).toHaveLength(mockClientes.length - 1);
  });

  // Agrega más pruebas aquí según tus necesidades

});