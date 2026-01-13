import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { Order } from './Components/order/order';
import { Cart } from './Components/cart/cart';
import { BuildUrPizza } from './Components/build-ur-pizza/build-ur-pizza';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'order-pizza', component: Order },
    { path: 'cart', component: Cart },
    { path: 'build-ur-pizza', component: BuildUrPizza }
];