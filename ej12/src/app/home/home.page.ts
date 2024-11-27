import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  data: any[] = [];
  filtro: string = '';

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<any[]>('https://raw.githubusercontent.com/rsansan079/Hora-Libre-Configuracion/master/1.12/data.json') // URL cruda del JSON
      .subscribe(
        (response) => {
          console.log('Datos recibidos:', response); // Mostrar los datos en la consola
          this.data = response; // Asignar los datos
        },
        (error) => {
          console.error('Error al obtener el JSON:', error); // Manejar errores
        }
      );
  }
}  
