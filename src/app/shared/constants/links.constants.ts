import { ROUTES } from './routes.constants';

export const LINKS = [
  { title: 'About me', path: ROUTES.about.path, internalLink: true },
  { title: 'Projects', path: ROUTES.projects.path, internalLink: true },
  { title: 'Contact', path: ROUTES.mailTo, internalLink: false },
];
