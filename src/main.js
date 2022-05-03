import {home} from './components/home.js';
const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

const routes = {
    '/' : home,
   // '/contact' : contact,
   // '/about' : about
};

const onNavigate = (pathname) => {
    window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
    )
    rootDiv.appendChild(routes[pathname]());
};

window.onpopstate = () => {
    rootDiv.appendChild(routes[window.location.pathname]());
}
