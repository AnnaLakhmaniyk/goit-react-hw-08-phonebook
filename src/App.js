import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from 'components/AppBar/AppBar';
import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';
import Loader from 'components/Loder/Loader';

const ContactView = lazy(() => import('vievs/ContactView'));
const RegisterView = lazy(() => import('vievs/RegisterView'));
const LoginView = lazy(() => import('vievs/LoginView'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <AppBar />
        <Routes>
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactView />
              </PrivateRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterView />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginView />
              </PublicRoute>
            }
          />
          <Route
            path="*"
            element={
              <PublicRoute>
                <LoginView />
              </PublicRoute>
            }
          />
        </Routes>
        <ToastContainer autoClose={3000} />
      </Suspense>
    </div>
  );
};
export default App;
