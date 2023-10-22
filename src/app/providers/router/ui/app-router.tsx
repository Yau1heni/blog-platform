import { Route, Routes } from 'react-router-dom';
import { memo, Suspense, useMemo } from 'react';
import { routeConfig } from 'shared/config/route-config/route-config';
import { PageLoader } from 'shared/ui/page-loader/page-loader';
import { useSelector } from 'react-redux';
import { selectAuthData } from 'entities/user';

export const AppRouter = memo(() => {
  const isAuth = useSelector(selectAuthData);

  const routes = useMemo(() => Object.values(routeConfig)
    .filter((route) => !(route.authOnly && !isAuth)), [isAuth]);

  return (
    <Routes>
      {routes.map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={(
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">
                {element}
              </div>
            </Suspense>
          )}
        />
      ))}
    </Routes>
  );
});
