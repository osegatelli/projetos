import { MenuItem } from './../menu-item/menu-item.model';


export class CartItem {
    quantity: any;
    constructor(public menuItem: MenuItem,
        public quantily: number = 1) { }

    value(): number {

        return this.menuItem.price * this.quantily

    }
}