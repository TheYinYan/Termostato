import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-control-temperature',
  imports: [],
  templateUrl: './control-temperature.component.html',
  styleUrl: './control-temperature.component.css',
})
export class ControlTemperatureComponent {
  // Inputs/outputs
  temperature = input.required<number>();
  temperatureOutput = output<number>();
  umbralOutput = output<number>();

  // Propiedades
  temUpdate?: number;

  // Eventos/listenters
  onClickIncTemp() {
    this.temUpdate = this.temperature() + 1;
    this.temperatureOutput.emit(this.temUpdate);
  }

  onClickDecTemp() {
    this.temUpdate = this.temperature() - 1;
    this.temperatureOutput.emit(this.temUpdate);
  }

  onInput(evento: Event) {
    let inputElement = evento.target as HTMLInputElement;
    try {
      let umbral = Number(inputElement.value);
      console.log(`Se establece nuevo: ${umbral}`);
      this.umbralOutput.emit(umbral);
    } catch (error) {
      inputElement.value = this.temperature().toString();
    }
  }
}
