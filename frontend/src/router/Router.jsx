import { Routes, Route, Navigate } from "react-router-dom";
import { ForgotPasswordPage, HomePage, Login, PageNotFound } from "../accessPublic";

export const Router = () => {

  const authenticated = 'not-authenticated';

  return (
    <Routes>

      {
        ( authenticated === 'authenticated' )
        ? (
          <>
            { /* Rutas Privadas */ }
            <Route path="/" element={<HomePage />} />

            <Route path="/*" element={ <Navigate to="/" /> } />
          </>
        )
        : (
          <>
            { /* Rutas Publicas */ }
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/recuperar-cuenta" element={<ForgotPasswordPage />} />

            <Route path="/*" element={ <Navigate to="/404" /> } />
            <Route path="/404" element={<PageNotFound />} />
          </>
        )
      }

    </Routes>
  )
}
