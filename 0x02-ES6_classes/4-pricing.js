import Currency from './3-currency';

export default class Pricing {
  constructor(amount, Currency) {
    this.amount = amount;
    this.Currency = Currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  get Currency() {
    return this._Currency;
  }

  set Currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be a Currency');
    }
    this._Currency = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.Currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
