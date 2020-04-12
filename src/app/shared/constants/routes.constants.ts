import { EMAIL } from './contact.constant';

export const ROUTES = {
  home: {
    path: '/home',
    name: 'home'
  },
  about: {
    path: '/about',
    name: 'about'
  },
  projects: {
    path: '/projects',
    name: 'projects'
  },
  mailTo: `mailto:${EMAIL}`
};
