import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common'; 
import { Observable, map } from 'rxjs'; 
import { Pelicula } from '../../interfaces/pelicula';
import { TarjetaPelicula } from '../../shared/tarjeta-pelicula/tarjeta-pelicula';
import { PeliculaService } from '../../services/pelicula';

@Component({
  selector: 'app-estrenos',
  standalone: true,
  imports: [TarjetaPelicula, AsyncPipe],
  templateUrl: './estrenos.html',
  styleUrl: './estrenos.css',
})
export class Estrenos implements OnInit {
  listaPeliculas$!: Observable<Pelicula[]>;

  constructor(private peliculaService: PeliculaService) {}

  ngOnInit(): void {
    this.listaPeliculas$ = this.peliculaService.getPeliculas().pipe(
      map(datosQueLlegan => datosQueLlegan.filter(pelicula => 
        this.isEstrenoDelMes(pelicula.fecha_estreno)
      ))
    );
  }

  isEstrenoDelMes(fechaString: string): boolean {
    const fechaPelicula = new Date(fechaString);
    const fechaActual = new Date();

    return (fechaPelicula.getMonth() === fechaActual.getMonth() &&
            fechaPelicula.getFullYear() === fechaActual.getFullYear());
  }
}