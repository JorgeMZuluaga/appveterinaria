import React from 'react';
import { shallow } from 'enzyme';
import MascotaList from './MascotaList';

describe('MascotaList', () => {
  const mockMascotas = [
    {
      Identificacion: '1',
      Nombre: 'Max',
      Especie: 'Perro',
      Raza: 'Labrador',
      Propietario: 'John Doe'
    },
    {
      Identificacion: '2',
      Nombre: 'Luna',
      Especie: 'Gato',
      Raza: 'Persa',
      Propietario: 'Jane Smith'
    }
  ];

  beforeEach(() => {
    localStorage.setItem('localmascota', JSON.stringify(mockMascotas));
  });

  it('debería mostrar la lista de mascotas', () => {
    const wrapper = shallow(<MascotaList />);
    const mascotaItems = wrapper.find('.grid-item');
    expect(mascotaItems).toHaveLength(mockMascotas.length);
  });

  it('debería eliminar una mascota al hacer clic en el botón de eliminar', () => {
    const wrapper = shallow(<MascotaList />);
    const deleteButton = wrapper.find('.delete-button').first();

    // Simular el clic en el botón de eliminar
    deleteButton.simulate('click');

    // Verificar que la mascota se haya eliminado
    expect(wrapper.state('mascotas')).toHaveLength(mockMascotas.length - 1);
  });

  // Agrega más pruebas aquí según tus necesidades

});