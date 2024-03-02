import { Routes, Route, Navigate } from "react-router-dom";

import { routesPublic, routesAdmin } from "./";
import { HomePage, PageNotFound } from "../pages";
import { useCheckAuth } from "../hooks";
import { Loader } from "../components";
import { Suspense } from "react";

export const AppRouter = () => {

  const status = useCheckAuth();

  if( status === 'checking' ) {
    return (<Loader />);
  }

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {
          ( status === 'authenticated' )
          ? (
            <>
              { /* Rutas Privadas */ }
              {
                routesAdmin.map( ({ path, Template, Component }, index) => (<Route key={index} path={path} element={ <Template><Component /></Template> } />) )
              }

              <Route path="/" element={<HomePage />} />
              <Route path="/*" element={ <Navigate to="/dashboard" /> } />
            </>
          )
          : (
            <>
              { /* Rutas Publicas */ }
              {
                routesPublic.map( ({ path, Component }, index) => (<Route key={index} path={path} element={ <Component /> } />) )
              }

              <Route path="/*" element={ <Navigate to="/404" /> } />
              <Route path="/404" element={<PageNotFound />} />
            </>
          )
        }

      </Routes>
    </Suspense>
  )
}
