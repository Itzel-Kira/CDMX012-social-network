/* eslint-disable import/no-cycle */
// Esto es una función que retorna homeDiv que es un nuevo nodo
import { loginGoogle } from '../lib/auth.js';
import { onNavigate } from '../main.js';

export const homeLogin = () => {
  const homeSection = document.createElement('section');
  homeSection.className = 'home';

  const nodeH1 = document.createElement('h1');
  nodeH1.textContent = 'PALEOFRIENDS';

  const logo = document.createElement('img');
  logo.className = 'logo';
  logo.src = './images/logo.png';

  const nodeH2 = document.createElement('h2');
  nodeH2.textContent = 'Tu ventana al pasado';

  const nodeH3 = document.createElement('h3');
  nodeH3.textContent = 'Regístrate o inicia sesión con';

  const iconGoogle = document.createElement('img');
  iconGoogle.className = 'iconGoogle';
  iconGoogle.src = './images/google.png';

  const buttonRegisterLogin = document.createElement('button');
  buttonRegisterLogin.className = 'buttomLogin';
  buttonRegisterLogin.textContent = 'Adelante';
  buttonRegisterLogin.addEventListener('click', () => {
    loginGoogle();
    onNavigate('/post');
  });

  homeSection.append(nodeH1, logo, nodeH2, nodeH3, iconGoogle, buttonRegisterLogin);
  return homeSection;
};

