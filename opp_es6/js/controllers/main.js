import saveData from "../services/saveData.js";
import ListPerson from "../modules/ListPerson.js";
import Student from "../modules/Student.js";
import renderTable from "../services/renderTable.js";
import Employee from "../modules/Employee.js";
import Customer from "../modules/Customer.js";
import popup from "../services/popup.js";
import getData from "../services/getData.js";
import Validation from "../services/validation.js";
import { checkSimpleValue, checkValidScore, checkValidCustomer, checkValidTeacher } from "../services/checkValidatetion.js";
let listperson = new ListPerson();
let validation = new Validation();
window.changeUIByPostion = (el) => {
  const value = el.value;
  renderOptional(value)
}
const correct = (id) => {
    return document.getElementById(id).style.borderColor = 'green';
}

//fail
const failValid = (id) => {
    return document.getElementById(id).style.borderColor = 'red';
}
const renderOptional = (value) => {
  switch (value) {
      case '': {
          document.querySelectorAll('.optional').forEach((option) => {
              option.style.display = 'none';
          })
          break;
      }
      case 'Học sinh': {
          document.querySelectorAll('.optional').forEach((option) => {
              option.style.display = 'none';
          })
          document.getElementById('student').style.display = 'flex';
          break;
      }
      case 'Giáo viên': {
          document.querySelectorAll('.optional').forEach((option) => {
              option.style.display = 'none';
          })
          document.getElementById('teacher').style.display = 'flex';
          break;
      }
      case 'Khách hàng': {
          document.querySelectorAll('.optional').forEach((option) => {
              option.style.display = 'none';
          })
          document.getElementById('customer').style.display = 'flex';
          break;
      }
  }
}
document.getElementById('btn-add').onclick = () => {
  checkValidByMethod('add')
}

window.getPerson = (changeId) => {
       console.log(changeId)
  let person = listperson.getPersonByID(changeId)
  const { id, name, address, email, position } = person;
 console.log(person)
  document.getElementById('btn-add').disabled = true;
  document.getElementById('btn-update').disabled = false;
  document.getElementById('userID').disabled = true;
  document.getElementById('userID').value = id;
  document.getElementById('name').value = name;
  document.getElementById('inputAddress').value = address;
  document.getElementById('Email').value = email;
  document.getElementById('position').value = position;
  

  
  switch (position) {
      case 'Học sinh': {
          document.getElementById('diemToan').value = person.math;
          document.getElementById('diemLy').value = person.physics;
          document.getElementById('diemHoa').value = person.chemistry;
          renderOptional(position);
          break;
      }
      case 'Giáo viên': {
          document.getElementById('ngayLam').value = person.daysWorked;
          document.getElementById('luongTN').value = person.dailyWage;
          renderOptional(position);
          break;
      }
      case 'Khách hàng': {
          document.getElementById('nameCT').value = person.company;
          document.getElementById('hoaDon').value = person.orderValue;
          document.getElementById('danhGia').value = person.rating;
          renderOptional(position);
          break;
      }
  }

}
const checkValidByMethod = (method) => {
    let id = document.getElementById('userID').value * 1;
    let name = document.getElementById('name').value;
    let address = document.getElementById('inputAddress').value;
    let email = document.getElementById('Email').value;
    let position = document.getElementById('position').value;
    if (checkSimpleValue(id, name, address, email, position)) {
        if (method === 'add') {
            switch (position) {
                case 'Học sinh': {
                    let math = document.getElementById('diemToan').value;
                    let physics = document.getElementById('diemLy').value;
                    let chemistry = document.getElementById('diemHoa').value;
                    if (checkValidScore(math, physics, chemistry)) {
                        let student = new Student(id, name, address, email, position, math, physics, chemistry);
                        student.calcScore();
                        listperson.addNewPerson(student);
                        break;
                    }
                    else {
                        return;
                    }

                }
                case 'Giáo viên': {
                    let daysWorked = document.getElementById('ngayLam').value;
                    let dailyWage = document.getElementById('luongTN').value;
                    if (checkValidTeacher(daysWorked,dailyWage)) {
                        let teacher = new Employee(id, name, address, email, position, daysWorked,dailyWage);
                        teacher.calcSalary();
                        listperson.addNewPerson(teacher);
                        break;
                    }
                    else {
                        return;
                    }

                }
                case 'Khách hàng': {
                    let company = document.getElementById('nameCT').value;
                    let orderValue = document.getElementById('hoaDon').value;
                    let rating = document.getElementById('danhGia').value;
                    if (checkValidCustomer(company, orderValue, rating)) {
                        let customer = new Customer(id, name, address, email, position, company, orderValue, rating);
                        listperson.addNewPerson(customer);
                        break;
                    }
                    else {
                        return;
                    }
                }
            }
        }
        if (method === 'update') {
            switch (position) {
                case 'Học sinh': {
                    let math = document.getElementById('diemToan').value;
                    let physics = document.getElementById('diemLy').value;
                    let chemistry = document.getElementById('diemHoa').value;
                    if (checkValidScore(math, physics, chemistry)) {
                        let updateStudent = new Student(id, name, address, email, position, math, physics, chemistry);
                        updateStudent.calcScore();
                        listperson.updatePersonInfo(updateStudent);
                        break;
                    }
                    else {
                        return;
                    }
                }
                case 'Giáo viên': {
                    let daysWorked = document.getElementById('ngayLam').value;
                    let dailyWage = document.getElementById('luongTN').value;
                    if (checkValidTeacher(daysWorked, dailyWage)) {
                        let updateTeacher = new Employee(id, name, address, email, position, daysWorked, dailyWage);
                        updateTeacher.calcSalary();
                        listperson.updatePersonInfo(updateTeacher);
                        break;
                    }
                    else {
                        return;
                    }
                }
                case 'Khách hàng': {
                    let company = document.getElementById('nameCT').value;
                    let orderValue = document.getElementById('hoaDon').value;
                    let rating = document.getElementById('danhGia').value;
                    if (checkValidCustomer(company, orderValue, rating)) {
                        let updateCustomer = new Customer(id, name, address, email, position, company, orderValue, rating);
                        listperson.updatePersonInfo(updateCustomer);
                        break;
                    }
                    else {
                        return;
                    }
                }
            }
        }
        saveData();
        listperson.sortByName();
        renderTable(listperson.person);
    }
    else {
        return;
    }
}
document.getElementById('btn-delete').onclick = () => {
    let id = document.getElementById('delete-box').value;
    deletedPerson(id)
}
document.getElementById('btn-update').onclick = () => {
    checkValidByMethod('update');
}
window.deletedPerson = (id) => {
    listperson.deletePerson(id);
    saveData();
    renderTable(listperson.person);
}
window.filterType = (el) => {
    let value = el.value;
    console.log(value);
    let newList = listperson.filterType(value);
    renderTable(newList);
}
getData(listperson.person)
export {listperson ,validation,correct,failValid}