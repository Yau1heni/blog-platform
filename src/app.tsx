import './index.scss';
import {Link, Route, Routes} from 'react-router-dom';
import {AboutPageAsync} from './pages/about-page/about-page.async';
import {MainPageAsync} from './pages/main-page/main-page.async';
import {Suspense} from 'react';

export const App = () => {
  return (
    <div className="app">
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync/>}/>
          <Route path={'/'} element={<MainPageAsync/>}/>
          <Route/>
        </Routes>
      </Suspense>
    </div>
  );
};
