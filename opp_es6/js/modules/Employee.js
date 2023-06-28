import Person from "./Person.js"
export default class Employee extends Person{
  constructor(id, name, address, email, position,daysWorked,dailyWage ,total){
    super(id, name, address, email, position);
    this.daysWorked = daysWorked;
    this.dailyWage = dailyWage;
    this.total = 0;
  }
  calcSalary() {
    this.total = this.daysWorked * this.dailyWage;
}
}