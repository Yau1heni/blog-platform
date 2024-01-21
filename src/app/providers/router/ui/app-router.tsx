import { Route, Routes } from 'react-router-dom';
import { memo, Suspense, useCallback } from 'react';
import { AppRoutesProps, routeConfig } from 'shared/config/route-config/route-config';
import { PageLoader } from 'shared/ui/page-loader/page-loader';
import { RequireAuth } from './required-auth';

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((routes: AppRoutesProps) => {
    const { path, element, authOnly } = routes;

    const content = (
      <Suspense fallback={<PageLoader />}>
        {element}
      </Suspense>
    );

    return (
      <Route
        key={path}
        path={path}
        element={authOnly ? <RequireAuth>{content}</RequireAuth> : content}
      />
    );
  }, []);

  return (
    <Routes>
      {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>
  );
});
