import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.html',
  styleUrls: ['./dropdown-menu.css'],
})
export class DropdownMenu {
  isOpen = false;
  clicked = '';

  constructor(private eRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  documentClick(event: Event) {
    const target = event.target as any;
    const classList = Array.from(target.classList);
    this.clicked = '';

    const isMenuButton = classList.some((x) => x === 'menu-button');
    if (isMenuButton) {
      this.isOpen = true;
    }

    const isMenuItem = classList.some((x) => x === 'menu-item');
    if (isMenuItem) {
      this.isOpen = false;
      this.clicked = target.innerText;
    }

    const isContained = this.eRef.nativeElement.contains(target);
    if (!isContained) {
      this.isOpen = false;
    }
  }
}
