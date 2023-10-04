import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from 'shared/config/route-config/route-config';
import { PageLoader } from 'shared/ui/page-loader/page-loader';

export function AppRouter() {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={
          (
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">
                {element}
              </div>
            </Suspense>
          )
}
        />
      ))}
    </Routes>
  );
}
