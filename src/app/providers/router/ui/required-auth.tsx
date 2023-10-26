import { useSelector } from 'react-redux';
import { selectAuthData } from 'entities/user';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/route-config/route-config';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useSelector(selectAuthData);
  const location = useLocation();

  if (!auth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return children;
};
