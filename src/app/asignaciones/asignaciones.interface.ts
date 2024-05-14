export type Asignacion = {
  id: number;
  conductor: {
    id: number;
    nombre: string;
  };
  vehiculo: {
    id: number;
    placa: string;
  };
  ruta: {
    id: number;
    nombre_ruta?: string;
  };
};
