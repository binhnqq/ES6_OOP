
export default class ListPerson {
  constructor() {
    this.person = [];
  }
  addPerson = (newPerson)=> {
    let index = this.person.findIndex(person=>Number(person.id) === Number(newPerson.id))
    if(id !== -1){
      alert("ID không tồn tại");
      return "";
    }
    this.person.push(newPerson);
  }
  getPersonByID = (id) => {
    let findingPerson = this.person.find((person) => (person.id).toString() === (id).toString());
    return findingPerson;
}
addNewPerson = (newPerson) => {
  let index = this.person.findIndex(person => Number(person.id) === Number(newPerson.id));
  if (index !== -1) {
      alert('Id đã tồn tại');
      return;
  }
  this.person.push(newPerson);
}
sortByName = () => {
  this.person.sort((personA, personB) => {
      const nameA = personA.name.toUpperCase();
      const nameB = personB.name.toUpperCase();
      if (nameA < nameB) {
          return -1;
      }
      if (nameA > nameB) {
          return 1;
      }
      return 0;
  })
}
deletePerson = (id) => {
  let index = this.person.findIndex((person) => Number(id) === Number(person.id));
  if (index !== -1) {
      if (confirm("Bạn có chắc muốn xóa nhân sự này ?")) {
          this.person.splice(index, 1);
      }
      return;
  }
  alert('Không tìm thấy id cần xóa');
}
updatePersonInfo = (personUpdate) => {
  let index = this.person.findIndex((person) => Number(person.id) === Number(personUpdate.id))
  if (index !== -1) {
      this.person[index] = personUpdate;
  }
  else {
      alert('Không tìm thấy sinh viên cần update')
  }
}
filterType = (type) => {
  console.log(this.person);
  if (type === 'all') {
      console.log(this.person);
      return this.person;
  }
  else {
      let newList = this.person.filter((person) => person.position === type);
      console.log(newList);
      if (newList.length === 0) {
          newList = [];
      }
      return newList;
  }
}
  // addPerson(person) {
  //   this.persons.push(person);
  // }

  // removePerson(person) {
  //   const index = this.persons.indexOf(person);
  //   if (index > -1) {
  //     this.persons.splice(index, 1);
  //   }
  // }
}