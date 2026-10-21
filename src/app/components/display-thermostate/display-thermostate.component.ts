import { Component, input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display-thermostate',
  imports: [],
  templateUrl: './display-thermostate.component.html',
  styleUrl: './display-thermostate.component.css',
  host: {
    '[class.warning]': 'alarm',
  },
})
export class DisplayThermostateComponent implements OnChanges {

  // Hooks
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['temperature']) {
      this.alarm = changes['temperature'].currentValue > this.umbral();
    }
  }
  // Inputs/outputs
  temperature = input.required<number>();
  umbral = input.required<number>();

  // Propiedades
  alarm = false;

  // Eventos/listenters
}
