import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../../Services/pizza-service';
import { Pizza } from '../../Models/pizza';
import { CommonModule, CurrencyPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, TitleCasePipe, CurrencyPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {

  cart: { pizza: Pizza, quantity: number }[] = []
  constructor(private pizzaService: PizzaService) { }

  getCart() {
    this.cart = this.pizzaService.getCart()
  }

  getItemAmount(cartItem: { pizza: Pizza, quantity: number }) {
    return this.pizzaService.getItemAmount(cartItem)
  }

  getCartAmount() {
    return this.pizzaService.getCartAmount()
  }

  removeCartItem(cartItem: { pizza: Pizza, quantity: number }) {
    this.pizzaService.removeCartItem(cartItem)
    this.getCart()
  }

  incQty(cartItem: { pizza: Pizza, quantity: number }) {
    this.pizzaService.increaseQty(cartItem)
    this.getCart();
  }

  decQty(cartItem: { pizza: Pizza, quantity: number }) {
    this.pizzaService.decreaseQty(cartItem)
    this.getCart();
  }

  clearCart() {
    const userConfirmed = window.confirm('Confirm to clear cart');
    if (userConfirmed) {
      this.pizzaService.clearCart();
      this.getCart()
    }
  }

  ngOnInit() {
    this.getCart()
  }
}