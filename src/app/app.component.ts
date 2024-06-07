import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from './ini/body/body.component';
import { MenuComponent } from './ini/menu/menu.component';
import { SliderComponent } from './ini/slider/slider.component';
import { FooterComponent } from './ini/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BodyComponent, MenuComponent, SliderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'velarde';
}
