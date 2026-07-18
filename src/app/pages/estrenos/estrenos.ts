import { Component } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula';
import { TarjetaPelicula } from '../../shared/tarjeta-pelicula/tarjeta-pelicula';

@Component({
  selector: 'app-estrenos',
  imports: [TarjetaPelicula],
  templateUrl: './estrenos.html',
  styleUrl: './estrenos.css',
})
export class Estrenos {
  listaPeliculas: Pelicula[] = [
    {
    id: "1",
    titulo: "El Padrino",
    fecha_estreno: "2026-07-24",
    director: "Francis Ford Coppola",
    sinopsis: "El patriarca anciano de una dinastía del crimen organizado transfiere el control de su imperio clandestino a su hijo reacio.",
    calificacion: 9.2
  },
  {
    id: "2",
    titulo: "Matrix",
    fecha_estreno: "2026-08-31",
    director: "Lana Wachowski, Lilly Wachowski",
    sinopsis: "Un hacker informático aprende de misteriosos rebeldes sobre la verdadera naturaleza de su realidad y su papel en la guerra contra sus controladores.",
    calificacion: 8.7
  },
  {
    id: "3",
    titulo: "Interestelar",
    fecha_estreno: "2026-07-05",
    director: "Christopher Nolan",
    sinopsis: "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento por garantizar la supervivencia de la humanidad.",
    calificacion: 8.6
  }
  ]

  isEstrenoDelMes (fechaString: string): boolean {
    const fechaPelicula = new Date(fechaString);
    const fechaActual = new Date();

    return (fechaPelicula.getMonth() === fechaActual.getMonth() &&
            fechaPelicula.getFullYear() === fechaActual.getFullYear());
  }
}
