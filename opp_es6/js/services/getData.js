import  renderTable  from "./renderTable.js";
import {listperson} from "../controllers/main.js";
 const getData =()=>{
  let json =localStorage.getItem('listPerson');
  let data = JSON.parse(json);
  if (data !== null) {
    listperson.person = [...data];
    renderTable(listperson.person);
}
} 
export default getData;