import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  historias: { nombre: string, edad: number, historia: string }[] = [];

  constructor() {
    this.historias = [
      { nombre: 'Ana', edad: 22, historia: 'Me llamo Ana y estudio Ingeniería de Software. Siempre me ha apasionado la tecnología y estoy emocionada por aprender nuevas habilidades en el campo de la programación.' },
      { nombre: 'Carla', edad: 24, historia: 'Hola, soy Carlas y estudio Diseño Gráfico. Me encanta la creatividad y expresar mis ideas a través del arte digital. Estoy emocionada por explorar nuevas técnicas y tendencias en diseño.' },
      { nombre: 'María', edad: 20, historia: 'Soy María y estudio Medicina. Desde pequeña he querido ser doctora para ayudar a las personas y mejorar su calidad de vida. Estoy comprometida con mi formación y dedicada a mi carrera.' },
      { nombre: 'Juana', edad: 8, historia: 'Mi nombre es Juana y soy estudiante de Robotica infantil. me apaciona la tecnologia.' }
    ];
  }
}
