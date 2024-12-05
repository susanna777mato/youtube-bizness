import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  onNavClick(event: Event, elementId: string): void {
    event.preventDefault();
    this.scrollToElement(elementId);
  }

  isMenuOpen = false; toggleMenu() { this.isMenuOpen = !this.isMenuOpen; } 

}
