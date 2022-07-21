import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

function PublicRoute({ children, redirect = '/contacts', restricted = false }) {
  const isLogedOrNot = useSelector(getIsLoggedIn);
  //   const shoudRedirect = restricted && isLogedOrNot;

  return isLogedOrNot ? <Navigate to={redirect} replace /> : children;
}

export default PublicRoute;
