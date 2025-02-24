import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
})
export class FormularioComponent {
  formulario: { [key: string]: string } = {
    colorFavorito: '',
    fruta: '',
    habilidad: ''
  };
  resultado: string = '';
  mostrarResultado: boolean = false;

  personajes = [
    { nombre: 'Twilight Sparkle', colorFavorito: 'Morado', fruta: 'Mandarina', habilidad: 'Magia' },
    { nombre: 'Fluttershy', colorFavorito: 'Amarillo', fruta: 'Pera', habilidad: 'Dominación' },
    { nombre: 'Pinkie Pie', colorFavorito: 'Rosita', fruta: 'Manzana', habilidad: 'Diversión' },
    { nombre: 'Rainbow Dash', colorFavorito: 'Rojo', fruta: 'Apio', habilidad: 'Velocidad' },
    { nombre: 'Rarity', colorFavorito: 'Morado', fruta: 'Uvas', habilidad: 'Moda' },
    { nombre: 'Applejack', colorFavorito: 'Naranja', fruta: 'Manzana', habilidad: 'Cultivo' },
  ];

  adivinarPersonaje() {
    // Filtramos los personajes que coinciden con al menos una respuesta.
    const posiblesPersonajes = this.personajes.filter(p =>
      p.colorFavorito.toLowerCase() === this.formulario['colorFavorito'].toLowerCase() ||
      p.fruta.toLowerCase() === this.formulario['fruta'].toLowerCase() ||
      p.habilidad.toLowerCase() === this.formulario['habilidad'].toLowerCase()
    );

    if (posiblesPersonajes.length > 0) {
      // Seleccionamos un personaje aleatorio de los posibles personajes.
      const personajeAleatorio = posiblesPersonajes[Math.floor(Math.random() * posiblesPersonajes.length)];
      this.resultado = `🎠 ¡Eres ${personajeAleatorio.nombre}! 🎉`;
    } else {
      this.resultado = '❌ Lo siento, no pude adivinar el personaje.';
    }
    this.mostrarResultado = true;
  }

  onInputChange(event: Event, campo: string) {
    const input = <HTMLInputElement>event.target;
    if (input) {
      this.formulario[campo] = input.value;
    }
  }
}
