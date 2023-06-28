const popup =()=>{
  document.getElementById('btn-add').disabled = false;
  document.getElementById('btn-update').disabled = true;
  document.getElementById('userID').disabled = false;
  document.getElementById('userID').value = '';
  document.getElementById('name').value = '';
  document.getElementById('inputAddress').value = '';
  document.getElementById('Email').value = '';
  document.getElementById('position').value = '';
  document.getElementById('diemToan').value = '';
  document.getElementById('diemLy').value = '';
  document.getElementById('diemHoa').value = '';
  document.getElementById('ngayLam').value = '';
  document.getElementById('luongTN').value = '';
  document.getElementById('nameCT').value = '';
  document.getElementById('hoaDon').value = '';
  document.getElementById('danhGia').value = '';
  // document.querySelectorAll('.optional').forEach((option) => {
  //     option.style.display = 'none';
  // })
}
export default popup;