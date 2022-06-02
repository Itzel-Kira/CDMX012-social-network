import { getAuth } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js';
import { exit, createMyPost } from '../lib/auth.js';
import { listPost } from './listofpost.js';

export const post = () => {
  const postDiv = document.createElement('section');
  postDiv.className = 'postDiv';

  const header = document.createElement('div');
  header.className = 'header';
  
  const logo = document.createElement('img');
  logo.className = 'logoPost';
  logo.src = './images/logopost.png';

  const nodoH1 = document.createElement('h1');
  nodoH1.textContent = 'PALEOFRIENDS';

  const out = document.createElement('img');
  out.className = 'iconOut';
  out.src = './images/cerrar-sesion.png';

  const logOut = document.createElement('button');
  logOut.className = 'logOut';
  logOut.appendChild(out);
  logOut.addEventListener('click', () => {
    exit().then(() => {
    })
      .catch(() => {
        // console.log('error');
      });
  });

  const inputPost = document.createElement('textarea');
  inputPost.className = 'inputPost';
  inputPost.placeholder = '¿Qué estás pensando, Paleoamigo?';

  const buttonPost = document.createElement('button');
  buttonPost.className = 'buttonPost';
  buttonPost.textContent = 'Compartir';
  buttonPost.addEventListener('click', () => {
    createMyPost(inputPost.value).then(() => {
      inputPost.value = '';
    }).catch(() => {
    });
  });

  header.append(logo, nodoH1, logOut);
  postDiv.append(header, inputPost, buttonPost, listPost());
  return postDiv;
};
