import './styles/index.scss';
import {classNames} from 'shared/lib/helpers/class-names';
import {useTheme} from 'app/providers/theme-provider';
import {AppRouter} from 'app/providers/router';
import {Navbar} from 'widgets/navbar';

export const App = () => {
const {theme, toggleTheme} = useTheme()
  
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar/>
      <AppRouter/>

      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
};
