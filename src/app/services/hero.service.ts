import { Injectable } from "@angular/core";
import { HEROES } from "../components/heroes/mock-heroes";
import { Hero } from "../components/heroes/hero";
import { Observable, of } from "rxjs";

// this class participates in the dependency injection system
// It is going to provide an injectable service and also can take in injected dependencies
@Injectable({
  // Provide at root level
  providedIn: "root",
})
export class HeroService {
  constructor() {}

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
