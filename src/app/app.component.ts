import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlTemperatureComponent } from './components/control-temperature/control-temperature.component';
import { DisplayThermostateComponent } from './components/display-thermostate/display-thermostate.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ControlTemperatureComponent,
    DisplayThermostateComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Termostato';

  temperature = 20;
  umbral = 25;

  onCambioTemperatura(temUpdate: number) {
    this.temperature = temUpdate;
  }

  onCambioUmbral(umUpdate: number) {
    this.umbral = umUpdate;
  }
}
