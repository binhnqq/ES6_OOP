import { listperson } from "../controllers/main.js"

const saveData=()=>{
  let json = JSON.stringify(listperson.person);
  localStorage.setItem('listPerson',json);
}
export default saveData;