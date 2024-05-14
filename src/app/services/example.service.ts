/*
addCar(carData: any): Observable<Car[]>{
  const headers = new HttpHeaders({
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxLCJpYXQiOjE3MTU1NTQ4NzMsImV4cCI6MTcxNTU5ODA3M30._WiVhcxkemkousKAEi9r_jXK9BiDrnAPKUsbDqOFJuE'
  });
  return this.http.post<Car[]>(${this.baseUrl}/vehiculos, carData,{headers})
    .pipe(catchError((error: HttpErrorResponse) => {
      console.error('Error response:', error); // Log the entire error response for debugging
      return throwError(error.error); // Return a new Observable with the error
    }))
    .pipe(map((response:any) => response.data));
}*/

/*
updateCar(id:number, carData:any){
  const headers = new HttpHeaders({
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxLCJpYXQiOjE3MTU1NTQ4NzMsImV4cCI6MTcxNTU5ODA3M30._WiVhcxkemkousKAEi9r_jXK9BiDrnAPKUsbDqOFJuE'
  });
  return this.http.put<Car[]>(${this.baseUrl}/vehiculos/${id}, carData,{headers})
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error.error); // Return a new Observable with the error
      }))
    .pipe(map((response:any) => response.data));
}*/
