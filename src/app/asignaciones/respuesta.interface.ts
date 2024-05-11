export interface Respuesta<I> {
  code: number;
  message: string;
  data: I;
}
