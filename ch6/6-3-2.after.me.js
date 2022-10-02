export class Order {
  constructor(aRecord) {
    this._data = aRecord;
  }

  get quantityPrice() {
    return Math.max(0, this._data.quantity - 500) * this._data.itemPrice * 0.05;
  }

  get basePrice() {
    return this._data.quantity * this._data.itemPrice;
  }

  get deliveryPrice() {
    return Math.min(this._data.quantity * this._data.itemPrice * 0.1, 100);
  }

  get price() {
    return this.basePrice - this.quantityPrice + this.deliveryPrice;
  }
}
