/*import { exit } from "../lib/auth.js";*/
import { onNavigate } from "../main.js";

export const post =()=>{
  const postDiv = document.createElement('div');
  postDiv.className = 'postDiv';

const header = document.createElement('div');
header.className = 'header';

  const logo = document.createElement('img');
    logo.className = 'logoPost';
    logo.src = './images/logo.png';
  
  const nodoH1 = document.createElement('h1');
    nodoH1.textContent = 'Este es el muro';

  const logOut = document.createElement('button');
    logOut.className = 'logOut';
    logOut.textContent = 'Cerrar sesión';
    logOut.addEventListener('click', () => {
      exit().then(()=>{
        



        
  buttonRegisterLogin.addEventListener('click', () => {
    onNavigate('/post');
  });
      })
      .catch(()=>{
        console.log('error');
      })
    });
  header.append(logo, logOut);
  postDiv.append(header, nodoH1);
  return postDiv;
}