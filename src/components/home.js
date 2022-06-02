import { loginGoogle } from '../lib/auth.js';

export const homeLogin = () => {
  const backgroundImage = document.createElement('div');
  backgroundImage.className = 'fondo';

  const homeSection = document.createElement('section');
  homeSection.className = 'home';

  const logo = document.createElement('img');
  logo.className = 'logo';
  logo.src = './images/logo.png';

  const iconGoogle = document.createElement('img');
  iconGoogle.className = 'iconGoogle';
  iconGoogle.src = './images/google.png';

  const buttonRegisterLogin = document.createElement('button');
  buttonRegisterLogin.className = 'buttomLogin';
  buttonRegisterLogin.textContent = 'Acceso con     ';
  buttonRegisterLogin.append(iconGoogle);
  buttonRegisterLogin.addEventListener('click', () => {
    loginGoogle();
  });

  homeSection.append(logo, buttonRegisterLogin, backgroundImage);
  return homeSection;
};
