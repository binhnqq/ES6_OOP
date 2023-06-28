
//check dữ liệu cơ bản
import { correct, failValid, validation } from "../controllers/main.js";
//check dữ liệu cơ bản
export const checkSimpleValue = (id, name, address, email, position) => {
    let error = 0;
    if (!validation.checkID(id)) {
        showError('userID', 'show');
        failValid('userID')
        error++;
    }
    else {
        showError('userID', 'hide');
        correct('userID')
    }
    if (!validation.checkValid(name, /^[a-zA-ZÀ-ỹ\s]+$/)) {
        showError('name', 'show');
        failValid('name')
        error++;
    }
    else {
        showError('name', 'hide');
        correct('name')
    }
    if (!validation.checkEmpty(address, /^[a-zA-Z0-9\s.-]+$/)) {
        showError('inputAddress', 'show');
        failValid('inputAddress')
        error++;
    }
    else {
        showError('inputAddress', 'hide');
        correct('inputAddress')
    }
    if (!validation.checkValid(email, /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        showError('Email', 'show');
        failValid('Email')
        error++;
    }
    else {
        showError('Email', 'hide');
        correct('Email')
    }
    if (!validation.checkEmpty(position)) {
        showError('position', 'show');
        failValid('position')
        error++;
    }
    else {
        showError('position', 'hide');
        correct('position')
    }
    if (error != 0) {
        return false;
    }
    else {
        return true;
    }

}
//Check valid score 
export const checkValidScore = (math, physics, chemistry) => {
    let error = 0;
    if (!validation.checkValid(math, /^(10|[0-9])$/)) {
        showError('diemToan', 'show')
        failValid('diemToan');
        error++;
    }
    else {
        showError('diemToan', 'hide')
        correct('diemToan');
    }
    if (!validation.checkValid(physics, /^(10|[0-9])$/)) {
        showError('diemLy', 'show')
        failValid('diemLy');
        error++;
    }
    else {
        showError('diemLy', 'hide')
        correct('diemLy');
    }
    if (!validation.checkValid(chemistry, /^(10|[0-9])$/)) {
        showError('diemHoa', 'show')
        failValid('diemHoa');
        error++;
    }
    else {
        showError('diemHoa', 'hide')
        correct('diemHoa');
    }
    if (error !== 0) {
        return false;
    }
    else {
        return true;
    }
}

//Check valid teacher
export const checkValidTeacher = (daysWorked, dailyWage) => {
    let error = 0;
    if (!validation.checkValid(daysWorked, /^[1-9][0-9]*$/)) {
        showError('ngayLam', 'show');
        failValid('ngayLam');
        error++;
    }
    else {
        showError('ngayLam', 'hide');
        correct('ngayLam');
    }
    if (!validation.checkValid(dailyWage, /^[1-9][0-9]*$/)) {
        showError('luongTN', 'show');
        failValid('luongTN');
        error++;
    }
    else {
        showError('luongTN', 'hide');
        correct('luongTN');
    }
    if (error !== 0) {
        return false;
    }
    else {
        return true;
    }
}

//check valid customer
export const checkValidCustomer = (company, orderValue, rating) => {
    let error = 0;
    if (!validation.checkEmpty(company)) {
        showError('nameCT', 'show');
        failValid('nameCT');
        error++;
    }
    else {
        showError('nameCT', 'hide');
        correct('nameCT');
    }
    if (!validation.checkValid(orderValue, /^[0-9]+$/)) {
        showError('hoaDon', 'show');
        failValid('hoaDon');
        error++;
    }
    else {
        showError('hoaDon', 'hide');
        correct('hoaDon');
    }
    if (!validation.checkEmpty(rating)) {
        showError('danhGia', 'show');
        failValid('danhGia');
        error++;
    }
    else {
        showError('danhGia', 'hide');
        correct('danhGia');
    }
    if (error !== 0) {
        return false;
    }
    else {
        return true;
    }
}

const showError = (id, method) => {
    let el = document.getElementById(id);
    let parrent = el.parentElement;
    if (method === 'show') {
        parrent.querySelector('.text-danger').style.display = 'block';
    }
    else {
        parrent.querySelector('.text-danger').style.display = 'none';
    }
}