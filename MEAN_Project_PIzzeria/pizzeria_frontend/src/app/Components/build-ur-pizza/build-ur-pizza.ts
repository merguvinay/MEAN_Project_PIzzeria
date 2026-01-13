import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PizzaService } from '../../Services/pizza-service';
import { Ingredient } from '../../Models/ingredient';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-build-ur-pizza',
  imports: [CommonModule],
  templateUrl: './build-ur-pizza.html',
  styleUrl: './build-ur-pizza.css',
})
export class BuildUrPizza implements OnInit {
  ingredients: Ingredient[] = []

  constructor(private pizzaService: PizzaService, private cdr: ChangeDetectorRef) { }

  getIngredients() {
    this.pizzaService.getIngredients().subscribe(data => {
      this.ingredients = data.ingredients
      console.log(this.ingredients)
      this.cdr.detectChanges()
    })
  }

  selectIngredient(ingredient: Ingredient) {
    this.pizzaService.selectIngredient(ingredient)
  }

  removeIngredient(ingredient: Ingredient) {
    this.pizzaService.removeIngredient(ingredient)
  }

  toggleIngredient(ingredient: Ingredient) {
    if (!this.isSelected(ingredient)) {
      this.selectIngredient(ingredient)
    } else {
      this.removeIngredient(ingredient)
    }
  }

  isSelected(ingredient: Ingredient) {
    return this.pizzaService.isSelected(ingredient)
  }

  getIngredientsAmount() {
    return this.pizzaService.getIngredientsAmount()
  }

  ngOnInit(): void {
    this.getIngredients()
  }
}