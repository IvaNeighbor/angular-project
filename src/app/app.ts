import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Hero } from "./hero/hero";
import { Footer } from "./footer/footer";
import { OfferSection } from "./offer-section/offer-section";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, Footer, OfferSection],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
