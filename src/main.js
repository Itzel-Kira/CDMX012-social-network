import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js';
import { homeLogin } from './components/home.js';
import { post } from './components/post.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': homeLogin,
  '/post': post,
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
  rootDiv.append(routes[pathname]());
};

window.onpopstate = () => {
  rootDiv.append(routes[window.location.pathname]());
};

const component = routes[window.location.pathname];

onAuthStateChanged(getAuth(), (user) => {
  if (user) {
    onNavigate('/post');
  } else {
    onNavigate('/');
  }
});

rootDiv.append(component());
