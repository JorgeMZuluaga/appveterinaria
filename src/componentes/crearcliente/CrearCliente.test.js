import React from 'react';
import { shallow } from 'enzyme';
import CrearCliente from './CrearCliente';

describe('CrearCliente', () => {
  it('debería manejar el envío del formulario', () => {
    const wrapper = shallow(<CrearCliente />);
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.find('form').simulate('submit', mockEvent);
    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });

  it('debería actualizar el estado al cambiar los valores de los campos', () => {
    const wrapper = shallow(<CrearCliente />);
    const identificacionInput = wrapper.find('#exampleIdentificacion');
    const nombreInput = wrapper.find('#exampleInputNombre');
    const apellidoInput = wrapper.find('#exampleInputApellido');
    const telefonoInput = wrapper.find('#exampleInputTelefono');
    const emailInput = wrapper.find('#exampleInputemail');

    identificacionInput.simulate('change', { target: { value: '123' } });
    nombreInput.simulate('change', { target: { value: 'John' } });
    apellidoInput.simulate('change', { target: { value: 'Doe' } });
    telefonoInput.simulate('change', { target: { value: '123456789' } });
    emailInput.simulate('change', { target: { value: 'john.doe@example.com' } });

    expect(wrapper.state('identificacion')).toEqual('123');
    expect(wrapper.state('nombre')).toEqual('John');
    expect(wrapper.state('apellido')).toEqual('Doe');
    expect(wrapper.state('telefono')).toEqual('123456789');
    expect(wrapper.state('email')).toEqual('john.doe@example.com');
  });

  // Agrega más pruebas aquí según tus necesidades

});