import {Route, Routes} from 'react-router-dom';
import {Suspense} from 'react';
import {routeConfig} from 'shared/config/route-config/route-config';

export const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({element, path}) => (
        <Route key={path} path={path} element={
          (<Suspense fallback={<div>Loading...</div>}>
              {element}
            </Suspense>
          )}
        />
      ))}
    </Routes>
  );
};
