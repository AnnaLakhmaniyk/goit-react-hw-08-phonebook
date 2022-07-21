import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

function PrivateRoute({ children, redirect = '/login' }) {
  const isLogedOrNot = useSelector(getIsLoggedIn);
  return isLogedOrNot ? children : <Navigate to={redirect} replace />;
}

export default PrivateRoute;
