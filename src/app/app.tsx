import './styles/index.scss';
import { classNames } from 'shared/lib/class-names/class-names';
import { useTheme } from 'app/providers/theme-provider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';
import { Suspense, useEffect } from 'react';
import { selectInited, userActions } from 'entities/user';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { useSelector } from 'react-redux';

export function App() {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  const inited = useSelector(selectInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
}
