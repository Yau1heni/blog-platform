import './styles/index.scss';
import {Link, Route, Routes} from 'react-router-dom';
import {Suspense} from 'react';
import {classNames} from 'shared/helpers/class-names';
import {useTheme} from 'app/providers/theme-provider';
import {AboutPage} from 'pages/about-page';
import {MainPage} from 'pages/main-page';

export const App = () => {
const {theme, toggleTheme} = useTheme()
  
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage/>}/>
          <Route path={'/'} element={<MainPage/>}/>
          <Route/>
        </Routes>
      </Suspense>
    </div>
  );
};
