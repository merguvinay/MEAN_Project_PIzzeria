import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PizzaService } from '../../Services/pizza-service';
import { Pizza } from '../../Models/pizza';
import { CommonModule, CurrencyPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-orders',
  imports: [CommonModule, TitleCasePipe, CurrencyPipe],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order implements OnInit {
  pizzasList: Pizza[] = []

  constructor(private pizzaService: PizzaService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getPizzas()
  }

  getPizzas() {
    this.pizzaService.getPizzas().subscribe(data => {
      this.pizzasList = [...data.pizzas]
      this.cdr.detectChanges()
    })
  }

  performAction(pizza: Pizza) {
    if (!this.pizzaService.presetInCart(pizza)) {
      this.pizzaService.addPizzaToCart(pizza);
    } else {
      this.pizzaService.removePizzaFromCart(pizza)
    }
  }

  existInCart(pizza: Pizza) {
    return this.pizzaService.presetInCart(pizza)
  }

  addPizza(pizza: Pizza) {
    this.pizzaService.addPizzaToCart(pizza);
  }
}