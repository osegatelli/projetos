import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Restaurant } from "./restaurant/restaurant.model";
import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';

import { MEAT_API } from './../app.api';
import { ErrorHandler } from './../app.error-handler'

import 'rxjs/add/operator/map'  
import 'rxjs/add/operator/catch'

@Injectable()

export class RestaurantService {

    constructor(private http: HttpClient) { }

    restaurants(search?: string): Observable<Restaurant[]> {
        let params: HttpParams = undefined
        if(search){
            params = new HttpParams().append('q', search)
        }
        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, { params: params })
            
    }
    restaurantById(id: string): Observable<Restaurant> {
        return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
            
    }

    reviewsOfRestaurant(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
            
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]> {
        return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
            

    }
}