import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // для проверки loader
  setTimeout(() => resolve(import('./about-page')), 1500);
}));
