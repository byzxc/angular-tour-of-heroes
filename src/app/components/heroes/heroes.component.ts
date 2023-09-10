import { Component, OnInit } from "@angular/core";
import { Hero } from "./hero";
import { HeroService } from "../../services/heroes/hero.service";
import { MessageService } from "../../services/message/message.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"],
})

// Always export the component, so it can be used somewhere, e.g. routes and module
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  // Previously we retrieved heroes data directly from HEROES
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
