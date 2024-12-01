import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, RouterLink, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'Au petit village';
  products = [
    {
      id: 1,
      name: 'Abraracourcix',
      description: '',
      price: '50£',
      imageUrl: '/images/abraracourcix.webp',
    },
    {
      id: 2,
      name: 'Astérix',
      description: '',
      price: '40£',
      imageUrl: '/images/Asterix.webp',
    },
    {
      id: 3,
      name: 'Fast-car',
      description: '',
      price: '110£',
      imageUrl: '/images/car.webp',
    },
    {
      id: 4,
      name: 'Football',
      description: '',
      price: '80£',
      imageUrl: '/images/football.webp',
    },
    {
      id: 5,
      name: 'Idéfix',
      description: '',
      price: '50£',
      imageUrl: '/images/idéfix_large.webp',
    },
    {
      id: 6,
      name: 'Princesse',
      description: '',
      price: '150£',
      imageUrl: '/images/princesse-large.webp',
    },
    {
      id: 7,
      name: 'Renault-car',
      description: '',
      price: '100£',
      imageUrl: '/images/renault_r5-jaune.webp',
    },
    {
      id: 8,
      name: 'First royal',
      description: '',
      price: '150£',
      imageUrl: '/images/royal-figurine.jpg',
    },
    {
      id: 9,
      name: 'Second royal',
      description: '',
      price: '160£',
      imageUrl: '/images/royal.jpg',
    },
    {
      id: 10,
      name: 'Third royal',
      description: '',
      price: '100£',
      imageUrl: '/images/royal2.jpg',
    },
    {
      id: 11,
      name: 'Fourth royal',
      description: '',
      price: '90£',
      imageUrl: '/images/royal-figurine1.jpg',
    },
  ];
  searchTerm: string = '';
  sortorder: string = 'asc'; // default to ascending order

  filteredProducts() {
    let filtered =
      this.searchTerm.trim() === ''
        ? this.products
        : this.products.filter((product) =>
            product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
          );
    //sort products by price base on sortorder
    return filtered.sort((a, b) => {
      const priceA = parseFloat(a.price.replace('£', '')) || 0; //convert price to a number
      const priceB = parseFloat(b.price.replace('£', '')) || 0; // convert price to a number || Converts the price string (e.g., '100$') into a numeric value (e.g., 100).If the price is empty, it defaults to 0.

      if (this.sortorder === 'asc') {
        return priceA - priceB; //low to high
      } else {
        return priceB - priceA; //high to low
      }
    });
  }
}
