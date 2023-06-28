import Person from "./Person.js";
export default class Customer extends Person {
  constructor(id, name, address, email, position,company, orderValue, rating) {
    super(id, name, address, email, position);
    this.company = company;
    this.orderValue = orderValue;
    this.rating = rating;
  }
}
