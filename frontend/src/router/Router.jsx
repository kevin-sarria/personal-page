import { Routes, Route, Navigate } from "react-router-dom";
import { ForgotPasswordPage, HomePage, LoginPage, PageNotFound } from "../accessPublic";

export const Router = () => {

  return (
    <Routes>

      { /* Rutas Publicas */ }
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/recuperar-cuenta" element={<ForgotPasswordPage />} />

      <Route path="/*" element={ <Navigate to="/404" /> } />
      <Route path="/404" element={<PageNotFound />} />

    </Routes>
  )
}
