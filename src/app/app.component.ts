import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'proyecto030';
  columnas: string[] = ['codigo', 'descripcion', 'precio'];

  datos: Articulo[] = [
  new Articulo(1, 'papas', 55),
  new Articulo(2, 'manzanas', 53),
  new Articulo(3, 'naranjas', 25),
  ];

  dataSource: MatTableDataSource<Articulo> = new MatTableDataSource(this.datos);

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.datos);
  }

  //cuando un usuario ingresa o borra un caracter
  //"dataSource" actualizan los datos que se mostrarán en la vista.
  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }  

}

export class Articulo {
  constructor(public codigo: number, public descripcion: string, public precio: number) {}
}
