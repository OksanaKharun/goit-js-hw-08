
import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const kayStorage = "feedback-form-state";

const formInputs = {};
formEl.addEventListener('input',throttle ((evt) =>{
    formInputs[evt.target.name]= evt.target.value;
    localStorage.setItem(kayStorage,JSON.stringify(formInputs));
}), 500);

function savedInputsValue(){
    const getData = localStorage.getItem(kayStorage); 
  if(getData){
    const { email, message } = JSON.parse(getData);
    formEl.elements.email.value = email;
    formEl.elements.message.value = message;
  }  
}

savedInputsValue();
formEl.addEventListener('submit',onFormSubmit);
function onFormSubmit(evt){
console.clear();
evt.preventDefault();
evt.currentTarget.reset();
localStorage.removeItem(kayStorage);
console.log(formInputs);
}