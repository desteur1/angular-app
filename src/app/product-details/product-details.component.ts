import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  product: any; // this will storre the product details

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
  constructor(private route: ActivatedRoute) {
    //get the product ID from the route parameter
    const id = Number(this.route.snapshot.paramMap.get('id'));
    //find the product by its id
    this.product = this.products.find((product) => product.id === id);
  }
}
