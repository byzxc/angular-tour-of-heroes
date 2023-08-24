import { Component } from "@angular/core";
import { Hero } from "../hero";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"],
})

// Always export the component, so it can be used somewhere, e.g. routes and module
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: "WindStorm",
  };
}
