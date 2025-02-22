// eslint-disable-next-line import/no-cycle
import { home } from './components/home.js';
import { register } from './components/register.js';
import { login } from './components/login.js';
import { muro } from './components/muro.js';

const rootDiv = document.getElementById('root');
let routes = {};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(routes[pathname]);
};
// Las carpetas en las que se hace la modulación spa
routes = {
  '/': home(onNavigate),
  '/register': register(onNavigate),
  '/login': login(onNavigate),
  '/muro': muro(onNavigate),
};

const component = () => routes[window.location.pathname];
window.onpopstate = () => {
  rootDiv.appendChild(component());
};
rootDiv.appendChild(component());
