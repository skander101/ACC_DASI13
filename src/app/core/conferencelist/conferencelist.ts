import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Conference } from '../models/conference';

@Component({
  selector: 'app-conferencelist',
  imports: [CommonModule, FormsModule],
  templateUrl: './conferencelist.html',
  styleUrl: './conferencelist.css',
})
export class Conferencelist {
  title:string="Liste des Conferences"
  searchTerm = '';
  favorites = input<Conference[]>([]);
  @Output() favoriteAdded = new EventEmitter<Conference>();

  isFavorite(id: number): boolean {
    return this.favorites().some(conf => conf.id === id);
  }

  addToFavorites(conf: Conference): void {
    this.favoriteAdded.emit(conf);
  }

  get filteredConferences(): Conference[] {
    const term = this.searchTerm.trim().toLowerCase();

    if (!term) {
      return this.confList;
    }

    return this.confList.filter(conf =>
      conf.titre.toLowerCase().includes(term) ||
      conf.category.toLowerCase().includes(term) ||
      String(conf.lieu).toLowerCase().includes(term),
    );
  }

  confList :Conference[]=[

  {

   id: 1,

   titre: 'Angular Workshop',

   description: 'Découvrez les nouveautés d Angular et développez vos compétences.',

   date: new Date('2026-10-15'),


   lieu: 'Tunis',


   prix: 50,


   image: 'Images/1.jpeg',


   nbPlaces: 30,


   category: 'Technologie',


   nbLikes: 0,

  },


  {

   id: 2,


   titre: 'Music Festival 2026',


   description: 'Un festival musical avec plusieurs artistes et groupes.',


   date: new Date('2026-10-22'),


   lieu: 'Sousse',


   prix: 80,


   image: 'Images/2.jpeg',


   nbPlaces: 500,


   category: 'Musique',


   nbLikes: 12,

  },


  {

   id: 3,


   titre: 'AI & Innovation Conference',


   description: 'Une conférence consacrée à l’intelligence artificielle et à l’innovation.',


   date: new Date('2026-11-18'),


   lieu: 'Hammamet',


   prix: 100,


   image: 'Images/3.jpeg',


   nbPlaces: 0,


   category: 'Technologie',


   nbLikes: 0,

  },


  {

   id: 4,


   titre: 'Startup Meetup',


   description: 'Une rencontre entre entrepreneurs, étudiants et professionnels.',

   date: new Date('2026-11-05'),

   lieu: 'Tunis',

   prix: 30,

   image: 'Images/4.jpeg',

   nbPlaces: 0,

   category: 'Business',

   nbLikes: 0,

  },

 ];
}