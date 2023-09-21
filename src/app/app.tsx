import './styles/index.scss';
import {Link} from 'react-router-dom';
import {classNames} from 'shared/lib/helpers/class-names';
import {useTheme} from 'app/providers/theme-provider';
import {AppRouter} from 'app/providers/router';

export const App = () => {
const {theme, toggleTheme} = useTheme()
  
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <AppRouter/>
    </div>
  );
};
