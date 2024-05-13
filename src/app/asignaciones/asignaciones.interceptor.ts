import { HttpInterceptorFn } from '@angular/common/http';

export const asignacionesInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxLCJpYXQiOjE3MTU0NDY4NTIsImV4cCI6MTcxNTQ5MDA1Mn0.k7i-gql6k11XkZDu1EA6uBSA3hu8p4xbTFI1YvRsjIw';

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return next(authReq);
};
