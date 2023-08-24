import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger('buttonClick', [
      state('clicked', style({ transform: 'scale(1.1)' })),
      transition('void => clicked', animate('300ms ease-in-out')),
    ]),
  ],
})
export class FooterComponent {
  isDropdownOpen = false;
  buttonState: string; // Add buttonState property for animation

  // Define your list of currencies
  currencies = [
    { name: 'EGP', selected: false },
    { name: 'USD', selected: false },
    { name: 'CAD', selected: false },
    { name: 'SAR', selected: false },
    { name: 'GBP', selected: false },
  ];

  constructor(private router: Router) {
    this.buttonState = 'normal'; // Initialize buttonState
  }

  // Function to toggle the dropdown
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Function to handle the button click
  handleButtonClick() {
    this.toggleDropdown(); // Toggle the dropdown
    this.buttonState = 'clicked'; // Trigger button animation
    setTimeout(() => {
      this.router.navigate(['None']); // Navigate to "None" after a delay for animations
    }, 300); // Adjust the delay time as needed (300ms for example)
  }
}
