import { Component } from "@angular/core";
import { HEROES } from "./mock-heroes";
import { Hero } from "./hero";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"],
})

// Always export the component, so it can be used somewhere, e.g. routes and module
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
