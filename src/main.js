/* eslint-disable import/no-cycle */
import { homeLogin } from './components/home.js';
import { post } from './components/post.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': homeLogin,
  '/post': post
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]());
};

window.onpopstate = () => {
  rootDiv.appendChild(routes[window.location.pathname]());
};

const component = routes[window.location.pathname];

rootDiv.appendChild(component());
