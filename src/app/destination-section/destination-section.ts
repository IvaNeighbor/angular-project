import { Component } from '@angular/core';
import { TripCards } from "./trip-cards/trip-cards";

@Component({
  selector: 'app-destination-section',
  imports: [TripCards],
  templateUrl: './destination-section.html',
  styleUrl: './destination-section.scss'
})
export class DestinationSection {

}
