import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '../Models/pizza';
import { Ingredient } from '../Models/ingredient';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {

  cart: { pizza: Pizza, quantity: number }[] = []
  selectedIngredients: Ingredient[] = []

  constructor(private http: HttpClient) { }

  getPizzas() {
    return this.http.get<{ message: string, pizzas: Pizza[] }>('http://localhost:3000/pizzas')
  }

  getIngredients() {
    return this.http.get<{ message: String, ingredients: Ingredient[] }>(`http://localhost:3000/ingredients`)
  }

  getCart() {
    return [...this.cart]
  }

  getItemAmount(cartItem: { pizza: Pizza, quantity: number }) {
    return cartItem.pizza.price * cartItem.quantity;
  }

  getCartAmount() {
    let total = 0
    for (let item of this.cart) {
      total = total + (item.pizza.price * item.quantity)
    }
    return total
  }

  addPizzaToCart(pizza: Pizza) {
    this.cart = [...this.cart, { pizza, quantity: 1 }]
  }

  removePizzaFromCart(pizza: Pizza) {
    this.cart = this.cart.filter(each => each.pizza._id !== pizza._id)
  }

  presetInCart(pizza: Pizza) {
    const idx = this.cart.findIndex(each => each.pizza._id === pizza._id)
    return idx !== -1;
  }

  getItemsCount() {
    let count = 0;
    for (let item of this.cart) {
      count = count + item.quantity
    }
    return count;
  }

  removeCartItem(cartItem: { pizza: Pizza, quantity: number }) {
    this.cart = this.cart.filter(each => each.pizza._id !== cartItem.pizza._id)
  }

  increaseQty(cartItem: { pizza: Pizza, quantity: number }) {
    this.cart = this.cart.map(each => each.pizza._id === cartItem.pizza._id ? { pizza: each.pizza, quantity: each.quantity + 1 } : each)
  }

  decreaseQty(cartItem: { pizza: Pizza, quantity: number }) {
    if (cartItem.quantity > 1) {
      this.cart = this.cart.map(each => each.pizza._id === cartItem.pizza._id ? { pizza: each.pizza, quantity: each.quantity - 1 } : each)
    } else {
      this.removeCartItem(cartItem)
    }
  }

  clearCart() {
    this.cart = []
  }

  selectIngredient(ingredient: Ingredient) {
    this.selectedIngredients = [...this.selectedIngredients, ingredient]
  }

   removeIngredient(ingredient: Ingredient) {
    this.selectedIngredients = this.selectedIngredients.filter(each => each._id !== ingredient._id)
  }

  isSelected(ingredient: Ingredient) {
    const idx = this.selectedIngredients.findIndex(each => each._id === ingredient._id)
    return idx !== -1
  }

  getIngredientsAmount() {
    let total = 0
    for (let item of this.selectedIngredients) {
      total = total + item.price;
    }
    return total
  }
}