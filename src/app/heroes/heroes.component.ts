import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    HeroDetailComponent,
    UpperCasePipe,
  ],
})
export class HeroesComponent implements OnInit{
  selectedHero?: Hero;

  heroes: Hero[] = [];
  
  constructor(private heroService: HeroService, private messageService: MessageService) { }
  
  ngOnInit(): void {
  this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
 

  getHeroes(): void {
  this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}

