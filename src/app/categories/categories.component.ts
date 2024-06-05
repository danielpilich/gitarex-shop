import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Category {
  icon: string;
  name: string;
}

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule], // Dodaj tutaj CommonModule
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  constructor(private router: Router) {}

  navigateToProduct() {
    console.log('Navigating to product page');
    this.router.navigate(['/product']);
  }

  categories: Category[] = [
    { icon: 'assets/icons/guitar.png', name: 'Gitary' },
    { icon: 'assets/icons/microphone.png', name: 'Mikrofony' },
    { icon: 'assets/icons/cable.png', name: 'Kable' },
    { icon: 'assets/icons/bass.png', name: 'Basy' },
    { icon: 'assets/icons/software.png', name: 'Oprogramowania' },
    { icon: 'assets/icons/keyboard.png', name: 'Klawisze' },
    { icon: 'assets/icons/drums.png', name: 'Perkusje' },
    { icon: 'assets/icons/amplifier.png', name: 'Wzmacniacze' }, 
    { icon: 'assets/icons/accessories.png', name: 'Akcesoria' }
  ];
}
