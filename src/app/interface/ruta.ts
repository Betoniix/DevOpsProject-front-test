export interface Ruta {
    id: number;
    nombre_ruta: string;
    long_empresa: string;
    lat_empresa: string;
    long_destino: string;
    lat_destino: string;
    fecha_recorrido: string;
    fecha_creacion: string;
    exitoso: boolean;
    descripcion_problema: string;
    comentarios: string;
    id_asignacion: number;
}
