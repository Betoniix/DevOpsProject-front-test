import { HttpInterceptorFn, HttpHandler, HttpRequest } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Obtener el token de autorización desde tu servicio de autenticación
  const authToken = localStorage.getItem('Token');

  // Clonar la solicitud y agregar el encabezado de autorización si existe un token
  if (authToken) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });
    return next(authReq);
  }

  // Si no hay token de autorización, simplemente pasa la solicitud sin modificar
  return next(req);
};
