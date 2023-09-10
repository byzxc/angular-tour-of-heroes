import { Component, Input } from "@angular/core";
import { Hero } from "../heroes/hero";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.scss"],
})

// This component only receives a hero object through its hero property from heroes-component and displays it.
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
