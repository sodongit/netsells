import { Injectable } from "@angular/core";
import { Theme, white, black} from "./theme";

@Injectable({
  providedIn: "root"
})
export class ThemeService {
  private active: Theme = white;
  private availableThemes: Theme[] = [white, black];

  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }

  isDarkTheme(): boolean {
    return this.active.name === black.name;
  }

  setDarkTheme(): void {
    this.setActiveTheme(black);
  }

  setLightTheme(): void {
    this.setActiveTheme(white);
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
