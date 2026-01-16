import "bootstrap";
import "./style.css";


function whoToBlame(){
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  const randomIndex = Math.floor( Math.random() * 3 );
  return who[randomIndex]
}

function whatTheyDid(){
  let action = ['ate', 'peed', 'crushed', 'broke'];
  const randomIndex = Math.floor( Math.random() * 3);
  return action[randomIndex]
}

function whatToAvoid(){
  let what = ['my homework', 'my phone', 'the car'];
  const randomIndex = Math.floor( Math.random() * 2);
  return what[randomIndex]
}

function when(){
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  const randomIndex = Math.floor( Math.random() * 4);
  return when[randomIndex]
}

window.onload = function() {
  const h2Element = document.getElementById('excuse')
  
  h2Element.innerHTML =  `${whoToBlame()} ${whatTheyDid()} ${whatToAvoid()} ${when()}`
};

