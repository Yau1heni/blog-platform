import './styles/index.scss';
import {classNames} from 'shared/lib/helpers/class-names';
import {useTheme} from 'app/providers/theme-provider';
import {AppRouter} from 'app/providers/router';
import {Navbar} from 'widgets/navbar';

export const App = () => {
const {theme} = useTheme()
  
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar/>
      <AppRouter/>
    </div>
  );
};
