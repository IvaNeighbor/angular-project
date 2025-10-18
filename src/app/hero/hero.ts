import { Component } from '@angular/core';
import { BookingForm } from "./booking-form/booking-form";

@Component({
  selector: 'app-hero',
  imports: [BookingForm],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {

}
