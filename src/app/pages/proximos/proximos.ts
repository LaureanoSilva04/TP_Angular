import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common'; 
import { Observable, map } from 'rxjs';      
import { Pelicula } from '../../interfaces/pelicula';
import { PeliculaService } from '../../services/pelicula';
import { TarjetaPelicula } from '../../shared/tarjeta-pelicula/tarjeta-pelicula';

@Component({
  selector: 'app-proximos',
  standalone: true,
  imports: [TarjetaPelicula, AsyncPipe], 
  templateUrl: './proximos.html',
  styleUrl: './proximos.css'
})
export class Proximos implements OnInit {
  
  listaPeliculas$!: Observable<Pelicula[]>;

  constructor(private peliculaService: PeliculaService) {}

  ngOnInit(): void {
    this.listaPeliculas$ = this.peliculaService.getPeliculas().pipe(
      map(datos => datos.filter(pelicula => 
        this.esProximoEstreno(pelicula.fecha_estreno)
      ))
    );
  }

  esProximoEstreno(fechaString: string): boolean {
    const fechaPelicula = new Date(fechaString);
    const fechaActual = new Date(); 

    const anioPelicula = fechaPelicula.getFullYear();
    const mesPelicula = fechaPelicula.getMonth();
    const anioActual = fechaActual.getFullYear();
    const mesActual = fechaActual.getMonth();

    if (anioPelicula > anioActual) {
      return true;
    }
    
    if (anioPelicula === anioActual && mesPelicula > mesActual) {
      return true;
    }

    return false;
  }
}