import { Injectable } from "@angular/core";

import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { Order, OrderItem } from './order.model'

import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

import { MEAT_API } from './../app.api';
import { Observable } from "rxjs/Observable";

@Injectable()

export class OrderService {
    constructor(private cartService: ShoppingCartService, private http: HttpClient) { }

    itemsValue(): number {
        return this.cartService.total()
    }

    cartItems(): CartItem[] {
        return this.cartService.items;
    }
    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item)
    }
    decreaseQty(item: CartItem) {
        this.cartService.decreaseQty(item)
    }
    remove(item: CartItem) {

        this.cartService.removeItem(item)
    }

    checkOrder(order: Order): Observable<string> {

        return this.http.post<Order>(`${MEAT_API}/orders`, order)
            .map(order => order.id)
    }

    clear() {
        this.cartService.clear()
    }

}