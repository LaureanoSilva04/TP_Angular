import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from '../interfaces/pelicula'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  
  private apiUrl = 'https://6a5148bec576c846dcba49d4.mockapi.io/api/peliculas';

  constructor(private http: HttpClient) { }

  getPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.apiUrl);
  }

  agregarPelicula(nuevaPelicula: any): Observable<Pelicula> {
    return this.http.post<Pelicula>(this.apiUrl, nuevaPelicula);
  }

  eliminarPelicula(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}