import './styles/index.scss';
import {Link, Route, Routes} from 'react-router-dom';
import {AboutPageAsync} from './pages/about-page/about-page.async';
import {MainPageAsync} from './pages/main-page/main-page.async';
import {Suspense} from 'react';
import {useTheme} from './theme/use-theme';

export const App = () => {
const {theme, toggleTheme} = useTheme()
  
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle theme</button>
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
