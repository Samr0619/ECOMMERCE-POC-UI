import { HttpInterceptorFn } from '@angular/common/http';


export const jwtInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  debugger;
  const token = localStorage.getItem('accessToken');
  console.log(`Bearer ${token}`);
  const cloneRequest = req.clone({
    setHeaders: {
      Authorization : `Bearer ${token}`
    }
  });
  return next(cloneRequest);
};