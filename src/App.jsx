import { Suspense, useState } from "react";

import Loader from "./components/loader/Loader"
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import RegistrationPage from "./pages/registrationPage/RegistrationPage";
import LoginPage from "./pages/loginPage/LoginPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import Layout from "./components/layout/Layout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "./components/redux/auth/operations";

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
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
