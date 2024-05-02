import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Loader from "./components/loader/Loader"
import HomePage from "./pages/homePage/HomePage";
import RegistrationPage from "./pages/registrationPage/RegistrationPage";
import LoginPage from "./pages/loginPage/LoginPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import Layout from "./components/layout/Layout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import RestrictedRoute from "./components/restrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import { refreshUser } from "./redux/auth/operations";

import "./App.css";

function App() {
const dispatch = useDispatch();

useEffect(() => {
  dispatch(refreshUser())
}, [dispatch])

  return (
    <div>
      <Layout >
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacts" element={<PrivateRoute><ContactsPage /></PrivateRoute>} />
            <Route path="/register" element={<RestrictedRoute><RegistrationPage /></RestrictedRoute>} />
            <Route path="/login" element={<RestrictedRoute><LoginPage /></RestrictedRoute>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
