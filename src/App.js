import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from 'components/AppBar/AppBar';

// const Home = lazy(() => import('pages/Home/Home'));
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
      <Suspense>
        <AppBar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/contacts" element={<ContactView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
          {/* <Route path="*" element={<Home />} /> */}
        </Routes>
        <ToastContainer autoClose={3000} />
      </Suspense>
    </div>
  );
};
export default App;
