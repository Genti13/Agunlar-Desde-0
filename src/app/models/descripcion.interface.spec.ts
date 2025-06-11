import { Descripcion } from './descripcion.interface';

describe('Descripcion', () => {
  it('should create a valid Descripcion object', () => {
    const obj: Descripcion = {
      titulo: 'Test',
      parrafo: 'Contenido'
    };
    expect(obj).toBeTruthy();
  });
  ;
});
