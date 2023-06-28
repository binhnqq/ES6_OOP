import Person from "./Person.js";
export default class Student extends Person {
  constructor(id, name, address, email, position,math, physics, chemistry,score) {
    super(id, name, address, email, position);
    this.math = math;
    this.physics = physics;
    this.chemistry = chemistry;
    this.score =0
  }
  calcScore() {
    this.score = ((Number(this.math) + Number(this.physics) + Number(this.chemistry)) / 3).toFixed(2);
}
}
