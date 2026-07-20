import { Component, OnInit } from '@angular/core'; 
import { AsyncPipe } from '@angular/common';   
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { PeliculaService } from '../../services/pelicula';
import { Observable } from 'rxjs';
import { Pelicula } from '../../interfaces/pelicula';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin implements OnInit {

  formularioPelicula = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    fecha_estreno: new FormControl('', [Validators.required]),
    director: new FormControl('', [Validators.required]),
    sinopsis: new FormControl('', [Validators.required, Validators.minLength(10)]),
    calificacion: new FormControl('', [Validators.required, Validators.min(0), Validators.max(10)])
  });

  listaPeliculas$!: Observable<Pelicula[]>;

  constructor(private peliculaService: PeliculaService) {}

  ngOnInit(): void {
    this.cargarLista();
  }

  cargarLista() {
    this.listaPeliculas$ = this.peliculaService.getPeliculas();
  }

  guardarPelicula() {
    if (this.formularioPelicula.valid) {
      this.peliculaService.agregarPelicula(this.formularioPelicula.value).subscribe({
        next: (respuesta) => {
          alert('¡Película guardada con éxito!');
          this.formularioPelicula.reset();
          this.cargarLista(); 
        },
        error: (err) => {
          console.error('Error al guardar:', err);
          alert('Hubo un error al guardar la película.');
        }
      });
    } else {
      this.formularioPelicula.markAllAsTouched();
    }
  }

  borrarPeliculaAdmin(id: string, titulo: string) {
    if(confirm(`¿Estás seguro de eliminar "${titulo}" definitivamente?`)) {
      this.peliculaService.eliminarPelicula(id).subscribe({
        next: () => {
          alert('Película eliminada correctamente.');
          this.cargarLista(); 
        },
        error: (err) => {
          console.error('Error al borrar', err);
          alert('No se pudo eliminar la película.');
        }
      });
    }
  }
}