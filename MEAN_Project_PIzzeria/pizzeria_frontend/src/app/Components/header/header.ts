import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { PizzaService } from '../../Services/pizza-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(private router: Router, private pizzaService: PizzaService) { }

  goToCart() {
    this.router.navigate(['/cart'])
  }
  getTotalItems() {
    return this.pizzaService.getItemsCount()
  }
}