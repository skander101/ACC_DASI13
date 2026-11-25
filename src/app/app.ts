import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Conferencelist } from './core/conferencelist/conferencelist';
import { FooterComponent } from './core/footer/footer';
import { HeaderComponent } from './core/header/header';
import { HomeComponent } from './core/home/home';
import { Conference } from './core/models/conference';
import { NavbarComponent } from './core/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    Conferencelist,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  favorites = signal<Conference[]>([]);
  alertMessage = signal<string | null>(null);

  addToFavorites(conf: Conference): void {
    if (this.favorites().some(item => item.id === conf.id)) {
      this.alertMessage.set(`"${conf.titre}" est déjà dans vos favoris.`);
      return;
    }

    this.alertMessage.set(null);
    this.favorites.set([...this.favorites(), conf]);
  }

  dismissAlert(): void {
    this.alertMessage.set(null);
  }
}
