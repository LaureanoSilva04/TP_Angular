import { Component, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula';

@Component({
  selector: 'app-tarjeta-pelicula',
  imports: [],
  templateUrl: './tarjeta-pelicula.html',
  styleUrl: './tarjeta-pelicula.css',
})
export class TarjetaPelicula {
  @Input() peli!: Pelicula;
}
